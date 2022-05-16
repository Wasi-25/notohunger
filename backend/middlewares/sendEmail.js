const nodeMailer = require("nodemailer");

exports.sendEmail = async (options)=>{
    var transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f2f41adeec0a07",
          pass: "6ea06ea97bcdbc"
        }
      });
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    };

    await transporter.sendMail(mailOptions);
};