const connection = require('../database/conection')

  module.exports = {

    async search(request, response) { 
        const {tag_search} = request.body;   
     
        const searchresult = await connection('teach').select('*')
        .where("tag_teach1",tag_search).orWhere("tag_teach2",tag_search).orWhere("tag_teach3",tag_search)
       
        
        return response.json(searchresult); 
    }
 
    }