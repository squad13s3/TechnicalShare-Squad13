const connection = require('../database/conection')

  module.exports = {

    async create(request, response) { 
    
        const userId_FK= request.params.id
        const {tag_learn1, tag_learn2,tag_learn3} = request.body;
        

        await connection('learn').insert({userId_FK,tag_learn1, tag_learn2, tag_learn3}) 
        
        return response.json({message: 'tag cadastrada.' }); 
    }
 
    }