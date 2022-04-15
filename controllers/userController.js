const connection = require('../database/conection')

  module.exports = { 
    async insertAbout(request, response) { 
      try {
        
        const userId= request.params.id
        const {about} = request.body;

        await connection('user').where('userId', userId)
        .update({
          'about': about
        })
        return response.json({message: 'About atualizado.' });
     }
     catch (e) {
       console.log(e)
     }
     
    },
    
    async getAbout(request, response) { 

      try {
        
      const userId = request.params.id
      const about = await connection('user').where('userId', userId)
        .select('about')
        .first()
      return response.json( about );}
     
     catch (e) {
       console.log(e)
     }

  } }