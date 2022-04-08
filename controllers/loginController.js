module.exports = {
    async login(request, response) {
     const {email, password} = request.body;   
     
     
      return response.json(password);
    }
}