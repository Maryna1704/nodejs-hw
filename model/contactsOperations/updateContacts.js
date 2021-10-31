const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const updateContacts = async (contacts) => {
  const newContact = await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

module.exports = updateContacts

// '../../../', 'model', 'contacts',