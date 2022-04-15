const connection = require('../database/conection')

const crypto = require('crypto');

const mailer = require('nodemailer')
const smtpConfiguration = require('../config/smtp');

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

    async login(request, response) { 
     const {email, password} = request.body;   
     
     const user = await connection('user')
      .where('email', email)
      .where('password', password)
      .select("userId","email","name")
      .first()
      if (!user) {
        return response.status(400).json({ message: 'Falha ao efetuar Login, cheque suas informaçoes' });
      }
    
      return response.json(user);
 
    },

    async register (request, response) {
      const {name,email, password} = request.body
      const userId = crypto.randomUUID()

      const testExist = await connection('user')
      .where('email', email)
      .select('email')
      .first();
      if (!testExist)  {
          await connection('user').insert({userId, name,email,password}) 

          const {tag_learn1, tag_learn2,tag_learn3} = " "
          const {tag_teach1, tag_teach2, tag_teach3} = " "
          const userId_FK = userId

          await connection('learn').insert({tag_learn1, tag_learn2, tag_learn3, userId_FK})
          await connection('teach').insert({tag_teach1, tag_teach2, tag_teach3, userId_FK})
          const a = 'wolgranjulio@gmail.com'
      sendEmail(a)
          return response.json({message: 'Usuario cadastrado'})
      }else{
          return response.status(409).json({ message: 'O Email informado já foi cadastro.' })

      }
    
  } 
}