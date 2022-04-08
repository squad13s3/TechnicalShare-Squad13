const connection = require('../database/conection')

module.exports = {
    async list(request, response) {  
     
     const result = await connection('user').select('*')
      return response.json(result);
 
    }
}