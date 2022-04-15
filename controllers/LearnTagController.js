const connection = require('../database/conection')

  module.exports = {

    async create(request, response) { 
    
        const userId_FK = request.params.id
        const {tag_learn1, tag_learn2,tag_learn3} = request.body;
        

        const learntag = await connection('learn').where('userId_FK', userId_FK)
        .update({
          'tag_learn1': tag_learn1, 
          'tag_learn2': tag_learn2, 
          'tag_learn3': tag_learn3, 
        }).select('userId_FK')
        
        if (!learntag) {
          return response.status(400).json({ message: 'Falha ao efetuar update, cheque suas informaçoes' });
        }
        
        return response.json({message: 'tag cadastrada.' }); 
    }
 
    }