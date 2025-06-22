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
            console.error('Error:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    console.log(req.body.email)
    res.json({ status: 'ok', answer: req.body })
})
app.listen(3000, () => {
    console.log("server is running on port 3000")
})