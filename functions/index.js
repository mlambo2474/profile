const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Access your secrets
const gmailEmail = defineSecret("GMAIL_EMAIL");
const gmailPassword = defineSecret("GMAIL_PASSWORD");

// Cloud function to handle the form submission
exports.sendContactEmail = onRequest(
  { secrets: [gmailEmail, gmailPassword] },
  async (req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }
    const { name, email, message } = req.body;

    // Create the transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail.value(),  // Accessing the secret's value
    pass: gmailPassword.value(), // Accessing the secret's value
  },
});

    const mailOptions = {
      from: email,
      to: gmailEmail.value(), // Accessing the secret's value
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      logger.info("Email sent successfully", { structuredData: true });
      res.status(200).send({ success: true });
    } catch (error) {
      logger.error("Error sending email", error);
      res.status(500).send({ success: false, error: "Failed to send email" });
    }
  });
});






// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const nodemailer = require("nodemailer");
// const cors = require("cors")({ origin: true });

// // const gmailEmail = process.env.GMAIL_EMAIL || "";
// // const gmailPassword = process.env.GMAIL_PASSWORD || "";

// const gmailEmail = defineSecret("GMAIL_EMAIL");
// const gmailPassword = defineSecret("GMAIL_PASSWORD");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// exports.sendContactEmail = onRequest((req, res) => {
//   cors(req, res, async () => {
//     if (req.method !== "POST") {
//       return res.status(405).send("Method Not Allowed");
//     }
//     const { name, email, message } = req.body;

//     const mailOptions = {
//       from: email,
//       to: gmailEmail,
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       logger.info("Email sent successfully", { structuredData: true });
//       res.status(200).send({ success: true });
//     } catch (error) {
//       logger.error("Error sending email", error);
//       res.status(500).send({ success: false, error: "Failed to send email" });
//     }
//   });
// });
