const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

const config = require('./../config/index');
require('dotenv').config();

router.post('/send-email', async  (req, res) => {
    const { name, email, message } = req.body;

    contentHtml = `
        <h1>Información del usuario</h1>
        <ul>
            <li>Usuario: ${name}</li>
            <li>Correo del usuario: ${email}</li>
        </ul>

        <p>${message}</p>
    `;


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: config.mail,
            pass: config.pass
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'From ' <miguelbercru27@gmail.com>",
        to: "miguelbercru27@gmail.com",
        subject:  "Hola",
        text: "hello world"
    });

    console.log('Message send', info.messageId);
    res.redirect('/sucess.html');
})

module.exports = router;