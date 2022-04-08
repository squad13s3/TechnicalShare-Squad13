module.exports = {
    async register (request, response) {
        const (name,lastname,email, password, birthdate, specialization, hastags) = request.body
        return response.json("estou na rota do registro"); 
    } 
}

