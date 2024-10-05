const nodemailer = require('nodemailer');

const address = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASSWORD;

exports.postSendMail = (req, res) => {
  const { name, email, phone, subject, source, message } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: address,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: address,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSource: ${source}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending message: ' + error.message);
    }
    res.status(200).send('Message sent: ' + info.response);
  });
};
