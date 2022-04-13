const connection = require('../database/conection')

  module.exports = {

    async login(request, response) { 
     const {email, password} = request.body;   
     
     const user = await connection('user')
      .where('email', email)
      .where('password', password)
      .select("userId","email","name")
      .first()
      if (!user) {
        return response.status(400).json({ message: 'Falha ao efetuar Login, cheque suas informaçoes' });
      }

      return response.json(user);
 
    }
}