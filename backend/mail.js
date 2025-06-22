const express = require('express')
const nodemailer = require('nodemailer');
const app = express()
const cors = require('cors')
// const bodyparser = require('body-parser')
app.use(cors())
// app.use(bodyparser.json())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("working")
})
app.post('/', (req, res) => {

    // Step 1: Create transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devmagnets.mail@gmail.com',
            pass: 'owux zuyw ster pknz' // Use an app-specific password if 2FA is enabled
        }
    });


    // Step 2: Email details
    let mailOptions = {
        from: req.body.email,
        to: 'singhabhishek.engineer@gmail.com',
        replyTo: req.body.email,
        subject: 'Test Email',
        text: `
            Name: ${req.body.name}
            Email: ${req.body.email}
            Subject: ${req.body.subject}
            Message: ${req.body.message}
            `,
    };

    // Step 3: Send the email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.json({ status: 'error', message: 'Email failed to send' });
        } else {
            return res.json({ status: 'ok', message: 'Email sent successfully' });
        }
    });

    res.json({ status: 'ok', answer: req.body })
})
app.listen(3000)