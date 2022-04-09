const connection = require('../database/conection')
const crypto = require('crypto');

module.exports = {
    async register (request, response) {
        const {name,lastname,email, password, birthdate, specialization, hastags} = request.body
        const userId = crypto.randomUUID()
        await connection('user').insert({userId, name,lastname,email,password,birthdate, specialization, hastags}) 
        
            return response.json({message: 'Usuário cadastrado.' }); 
    } 
}

