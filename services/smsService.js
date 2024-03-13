// smsService.js
const twilio = require('twilio');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';

const client = twilio(accountSid, authToken);

const sendSMS = async (phoneNumber, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: phoneNumber
    });
    console.log(`SMS sent to ${phoneNumber}: ${response.sid}`);
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
  }
};

module.exports = { sendSMS };