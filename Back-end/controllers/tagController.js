const connection = require('../database/conection')

  module.exports = {
    async learnTagUpdate(request, response) { 
    
      const userId_FK = request.params.id
      const {tag_learn1, tag_learn2,tag_learn3} = request.body;
      

      const learntag = await connection('learn').where('userId_FK', userId_FK)
      .update({
        'tag_learn1': tag_learn1, 
        'tag_learn2': tag_learn2, 
        'tag_learn3': tag_learn3, 
      }).select('userId_FK')
      
      if (!learntag) {
        return response.status(400).json({ message: 'Falha ao efetuar update, cheque suas informaçoes' });
      }
      
      return response.json({message: 'tag cadastrada.' }); 
  },
  
  async teachTagUpdate(request, response) { 
    
    const userId_FK= request.params.id
    const {tag_teach1, tag_teach2,tag_teach3} = request.body;
    

    const teachtag = await connection('teach').where('userId_FK', userId_FK)
      .update({
        'tag_teach1': tag_teach1, 
        'tag_teach2': tag_teach2, 
        'tag_teach3': tag_teach3, 
      }).select('userId_FK')
      if (!teachtag) {
        return response.status(400).json({ message: 'Falha ao efetuar update, cheque suas informaçoes' });
      }
    return response.json({message: 'tag cadastrada.' }); 
},

    async search(request, response) { 
      
        const {tag_search} = request.body;   
     
        const searchresult = await connection('teach')
        .where("tag_teach1",tag_search).orWhere("tag_teach2",tag_search).orWhere("tag_teach3",tag_search)
        .join('user', 'teach.userId_fk','=', 'user.userId')
        .select('teach.tag_teach1','teach.tag_teach2','teach.tag_teach3','user.userId','user.name','user.imgUrl');
       
        
        return response.json(searchresult); 
    },
 
    async searchTeachTagById(request, response) { 
      
      
      const userId_FK = request.params.id 
   
      const result = await connection('teach')
      .where("userId_FK",userId_FK)
      .select('teach.tag_teach1','teach.tag_teach2','teach.tag_teach3');
     
      
      return response.json(result); 
    },
    async searchLearnTagById(request, response) { 
      
      
      const userId_FK = request.params.id 
   
      const result = await connection('learn')
      .where("userId_FK",userId_FK)
      .select('learn.tag_learn1','learn.tag_learn2','learn.tag_learn3');
     
      
      return response.json(result); 
    }
    }