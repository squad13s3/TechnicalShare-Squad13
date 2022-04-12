exports.up = function(knex) {
    return knex.schema.createTable('scheduleMentorship', function (table) {
        table.string('scheduleMentorship');
        table.uuid("userId_student").notNullable();
        table.uuid("userId_teacher").notNullable();
        
        table.foreign('userId_student').references('userId').inTable('user')
        table.foreign('userId_teacher').references('userId').inTable('user')
        
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('scheduleMentorship')
}