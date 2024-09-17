const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
  const newEmail = {
    ...data,
    from: 'maxy-margo@rambler.ru'
  }
  try {
    await sgMail.send(newEmail);
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail