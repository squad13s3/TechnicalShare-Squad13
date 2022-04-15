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
async function sendEmail(email,aluno){
  const mailSent = await smtpTransport.sendMail({
      text:  `${aluno} acredita que pode aprender muito com você, esperamos que possam aprender e compartilhar muito conhecimento.` , 
      subject: `${aluno} Agendou uma mentoria com você`,
      from: "TechnicalShare contato <squad13s3@gmail.com>",
      to:[email]
  });
  console.log(mailSent)
}


  module.exports = {

    async create(request, response) { 
    
        const userId_student= request.params.userId_student
        const userId_teacher= request.params.userId_teacher
        const {scheduleMentorship} = request.body;
        
        console.log(scheduleMentorship)
        await connection('scheduleMentorship')
        .insert({userId_student,userId_teacher,scheduleMentorship}) 
        
       const email = await connection('user').where('userId',userId_teacher).select('user.email')
       .first()
       const aluno = await connection('user').where('userId',userId_student).select('user.name')
       .first()
    
       
        sendEmail(email.email, aluno.name)
        return response.json({message: 'Mentoria Cadastarda!' }); 
    }
 
    }