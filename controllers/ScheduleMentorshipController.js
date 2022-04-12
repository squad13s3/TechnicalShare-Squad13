const connection = require('../database/conection')

  module.exports = {

    async create(request, response) { 
    
        const userId_student= request.params.userId_student
        const userId_teacher= request.params.userId_teacher
        const scheduleMentorship = request.body;
        

        await connection('scheduleMentorship').insert({userId_student,userId_teacher,scheduleMentorship}) 
        
        return response.json({message: 'Mentoria Cadastarda!' }); 
    }
 
    }