const connection = require('../database/conection')
const crypto = require('crypto');

const mailer = require('nodemailer')
const smtpConfiguration = require('../config/smtp');
const { send } = require('express/lib/response');

const smtpTransport = mailer.createTransport({
    host: smtpConfiguration.host,
    port: smtpConfiguration.port,
    secure: false,
    auth:{
        user: smtpConfiguration.user,
        pass: smtpConfiguration.pass,
    },
    tls: {
        rejectUnauthorized: false,
      },
});
async function sendEmail(email){
    const mailSent = await smtpTransport.sendMail({
        text: `Obrigado por se cadastrar na plataforma TechnicalShare, esperamos que aproveite todo aprendizado.` , 
        subject: "Cadastro Realizado",
        from: "TechnicalShare contato <squad13s3@gmail.com>",
        to:[email]
    });
    console.log(mailSent)
}

module.exports = {
    async register (request, response) {
        const {name,email, password} = request.body
        const userId = crypto.randomUUID()
        await connection('user').insert({userId, name,email,password}) 
//sendEmail(email)

        return response.json({message: 'Usuário cadastrado.' }); 
    } 
}

