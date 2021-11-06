const controllerWrapper = require('./controllerWrapper');
const validator = require('./validator');
const authenticate = require('./authenticate');
const upload = require('./upload')

module.exports = {
  controllerWrapper,
  validation,
  authenticate,
  upload
}