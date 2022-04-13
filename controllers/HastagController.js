const connection = require('../database/conection')

  module.exports = {

    async search(request, response) { 
        const {tag_teach1} = request.body;   
     
        const searchresult = await connection('teach')
         .where('tag_teach1', tag_teach1)
         .select("tag_teach1")
         .first()
       
        
        return response.json(searchresult); 
    }
 
    }