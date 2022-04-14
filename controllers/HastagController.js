const connection = require('../database/conection')

  module.exports = {

    async search(request, response) { 
        const {tag_search} = request.body;   

        
     
        const searchresult = await connection('teach')
        .where("tag_teach1",tag_search).orWhere("tag_teach2",tag_search).orWhere("tag_teach3",tag_search)
        .join('user', 'teach.userId_fk','=', 'user.userId')
        .select('teach.tag_teach1','teach.tag_teach2','teach.tag_teach3','user.userId','user.name');
       
        
        return response.json(searchresult); 
    }
 
    }