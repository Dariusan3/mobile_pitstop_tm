import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, device, issue, message } = req.body;

  try {
    // Email content
    const msg = {
      to: "dariusosadici@gmail.com", // Recipient email address
      from: process.env.FROM_EMAIL, // This should be your verified sender in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Device:</strong> ${device || "Not provided"}</p>
        <p><strong>Issue:</strong> ${issue || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.response ? error.response.body : error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
