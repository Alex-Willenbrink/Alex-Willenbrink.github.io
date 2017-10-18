import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../.env";

let _options = {
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
};

const _transporter = nodemailer.createTransport(_options);

const _createEmailOptions = options => {
  return {
    from: options.email,
    to: EMAIL_USER,
    subject: "Test",
    text: options.message,
    html: `<p>${options.message}</p>`
  };
};

const EmailService = {};

EmailService.send = async options => {
  try {
    await _transporter.sendMail(_createEmailOptions(options));
  } catch (error) {
    console.log(error.message);
  }
};

export default EmailService;
