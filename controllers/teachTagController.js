const connection = require('../database/conection')

  module.exports = {

    async create(request, response) { 
    
        const userId_FK= request.params.id
        const {tag_teach1, tag_teach2,tag_teach3} = request.body;
        

        const teachtag = await connection('teach').where('userId_FK', userId_FK)
          .update({
            'tag_teach1': tag_teach1, 
            'tag_teach2': tag_teach2, 
            'tag_teach3': tag_teach3, 
          }).select('userId_FK')
          if (!teachtag) {
            return response.status(400).json({ message: 'Falha ao efetuar update, cheque suas informaçoes' });
          }
        return response.json({message: 'tag cadastrada.' }); 
    }
 
    }