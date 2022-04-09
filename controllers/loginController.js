const connection = require('../database/conection')

  module.exports = {

    async login(request, response) { 
     const {email, password} = request.body;   
     
     const user = await connection('user')
      .where('email', email)
      .where('password', password)
      .select("userId","email","name","lastname")
      .first()
  

      return response.json(user);
 
    }
}