const connection = require('../database/conection')
module.exports = {
    async register (request, response) {
        const {name,lastname,email, password, birthdate, specialization, hastags} = request.body

        await connection('user').insert({name})

        return response.json("estou na rota do registro"); 
    } 
}

