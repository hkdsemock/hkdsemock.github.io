// server.js (or your Express route file)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/sendReport', async (req, res) => {
  const { email, phone, selectedSubjects, allAnswers } = req.body;

  // Here, calculate or generate the report
  // This is a placeholder function for your report generation logic
  const generateReport = (subjects, answers) => {
    // Implement your actual logic here...
    let reportText = 'Your Exam Report:\n\n';
    subjects.forEach((subject, index) => {
      reportText += `${subject.name}: ${Math.floor(Math.random() * 100)}\n`;
    });
    reportText += '\nPredicted Grade: ' + 'B+'; // Replace with real calculation
    return reportText;
  };

  const report = generateReport(selectedSubjects, allAnswers);

  // Configure Nodemailer (using a test account or your email service credentials)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, or use SMTP settings for your provider
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Define the email options
  let mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your Exam Report',
    text: report,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Report sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send report' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
