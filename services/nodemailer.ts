const nodemailer = require("nodemailer");

class NodeMailerSender {
   email: string;
  subject: string;
  message: string;
  constructor(email: string, subject: string, message: string) {
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure:false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  async sendMessage() {
    const mailOptions = {
      from: "shaza-alsham  ",
      to: this.email,
      subject: this.subject,
      html: "<h1>hello</h1>",
      text: "hello from shazaa alsham",
    };
    await this.newTransport().sendMail(mailOptions);
  }
}

export default NodeMailerSender;