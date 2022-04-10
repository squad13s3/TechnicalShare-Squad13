exports.up = function(knex) {
    return knex.schema.createTable('learn', function (table) {
        table.string('tag_learn1');
        table.string('tag_learn2');
        table.string('tag_learn3');
        table.uuid("userId_FK").notNullable();

        table.foreign('userId_FK').references('userId').inTable('user')
    
      
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('learn')
}