
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Accessing secrets
const gmailEmail = defineSecret("GMAIL_USERNAME");
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

      if (!name || !email || !message) {
        return res.status(400).send({ success: false, error: "Missing required fields" });
      }

      try {
        // Creating the transport
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailEmail.value(), // Correctly accessing the secret
            pass: gmailPassword.value(), // Correctly accessing the secret
          },
        });

        // Email sending options
        const mailOptions = {
          from: email,
          to: gmailEmail.value(), // Correctly accessing the secret
          subject: `New message from ${name}`,
          text: message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        logger.info("Email sent successfully", { structuredData: true });
        res.status(200).send({ success: true });
      } catch (error) {
        logger.error("Error sending email", { error: error.message });
        res.status(500).send({ success: false, error: "Failed to send email" });
      }
    });
  }
);


// const { onRequest } = require("firebase-functions/v2/https");
// // const functions = require("firebase-functions");
// const { defineSecret } = require("firebase-functions/params");
// const logger = require("firebase-functions/logger");
// const nodemailer = require("nodemailer");
// const cors = require("cors")({ origin: true });

// // Accessing secrets
// const gmailEmail = defineSecret("GMAIL_USERNAME");
// const gmailPassword = defineSecret("GMAIL_PASSWORD");

// // Cloud function to handle the form submission
// exports.sendContactEmail = onRequest(
//   { secrets: [gmailEmail, gmailPassword] },
//   async (req, res) => {
//     cors(req, res, async () => {
//       if (req.method !== "POST") {
//         return res.status(405).send("Method Not Allowed");
//       }

//       const { name, email, message } = req.body;
      
//       if (!name || !email || !message) {
//         return res.status(400).send({ success: false, error: "Missing required fields" });
//       }

//       try {
//         // Creating the transport
//         const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: gmailEmail.value(),  // process.env.GMAIL_EMAIL,
//             pass: gmailPassword.value()  //  process.env.GMAIL_PASSWORD,
//           },
//         });

//         // Email sending options
//         const mailOptions = {
//           from: email,
//           to: gmailEmail.value(),  // process.env.GMAIL_EMAIL,
//           subject: `New message from ${name}`,
//           text: message,
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);
//         logger.info("Email sent successfully", { structuredData: true });
//         res.status(200).send({ success: true });
//       } catch (error) {
//         logger.error("Error sending email", { error: error.message });
//         res.status(500).send({ success: false, error: "Failed to send email" });
//       }
//     });
//   }
// );

