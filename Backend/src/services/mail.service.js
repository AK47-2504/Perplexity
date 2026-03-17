import nodemailer, { createTransport } from "nodemailer";

// This code helps to communicate/connection between Web Server and Google SMTP Server and for this we need Google Client ID, Google Client Secret and Google Refresh Token
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter
  .verify()
  .then(() => {
    console.log("Email transporter is ready to send emails");
  })
  .catch((err) => {
    console.error("Email transporter verification failed:", err);
  });

// Function to Send Mail and whats all things should be included in Mail
export async function sendEmail({ to, subject, text, html }) {
  try {
    const mailOptions = {
      from: process.env.GOOGLE_USER,
      to,
      subject,
      html,
      text,
    };

    const details = await transporter.sendMail(mailOptions);
    console.log("Email sent:", details);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
