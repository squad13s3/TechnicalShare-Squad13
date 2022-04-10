exports.up = function(knex) {
    return knex.schema.createTable('teach', function (table) {
        table.string('tag_teach1');
        table.string("tag_teach2");
        table.string('tag_teach3');
        table.uuid("userId_FK").notNullable();

        table.foreign('userId_FK').references('userId').inTable("user")
    
      
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teach')
}