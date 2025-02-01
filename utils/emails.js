import nodemailer from "nodemailer";

// Create a reusable transporter object using default SMTP transport.
const transporter = nodemailer.createTransport({
  service: "gmail", // Use any SMTP provider you like
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password or app password
  },
});

// Send an email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    text,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendEmail;
