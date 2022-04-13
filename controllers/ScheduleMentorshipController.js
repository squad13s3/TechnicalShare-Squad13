const connection = require('../database/conection')


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
      subject: "Alguem agendou sua mentoria",
      from: "TechnicalShare contato <squad13s3@gmail.com>",
      to:[email]
  });
  console.log(mailSent)
}


  module.exports = {

    async create(request, response) { 
    
        const userId_student= request.params.userId_student
        const userId_teacher= request.params.userId_teacher
        const scheduleMentorship = request.body;
        

        await connection('scheduleMentorship').insert({userId_student,userId_teacher,scheduleMentorship}) 
        const email = "wolgranjulio@gmail.com" 
        sendEmail(email)
        return response.json({message: 'Mentoria Cadastarda!' }); 
    }
 
    }