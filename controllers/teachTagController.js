const connection = require('../database/conection')

  module.exports = {

    async create(request, response) { 
    
        const userId_FK= request.params.id
        const {tag_teach1, tag_teach2,tag_teach3} = request.body;
        

          await connection('teach').where('userId_FK', userId_FK)
          .update({
            'tag_teach1': tag_teach1, 
            'tag_teach2': tag_teach2, 
            'tag_teach3': tag_teach3, 
          })
        
        return response.json({message: 'tag cadastrada.' }); 
    }
 
    }