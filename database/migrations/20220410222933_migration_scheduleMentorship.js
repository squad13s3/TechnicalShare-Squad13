exports.up = function(knex) {
    return knex.schema.createTable('scheduleMentorship', function (table) {
        table.string('scheduleMentorship');
        table.uuid("userId_FK").notNullable();

        table.foreign('userId_FK').references('userId').inTable('user')
    
      
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('scheduleMentorship')
}