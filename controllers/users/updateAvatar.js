const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')

const { User } = require('../../models')

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user
  const { path: tempDir, originalname } = req.file

  await Jimp.read(tempDir)
    .then((image) => {
      return image.resize(250, 250).write(tempDir)
    })
    .catch((err) => {
      console.error(err)
    })

  const [extension] = originalname.split('.').reverse()
  const filename = `${_id}.${extension}`
  const uploadDir = path.join(__dirname, '../../', 'public\\avatars', filename)
  try {
    await fs.rename(tempDir, uploadDir)
    const image = path.join('avatars', filename)
    await User.findByIdAndUpdate(_id, { avatarURL: image })
    res.json({
      status: 'success',
      code: 201,
      message: 'Update avatar success'
    })
  } catch (error) {
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = updateAvatar