exports.up = function(knex) {
    return knex.schema.createTable('teach', function (table) {
        table.string('tag_ensinar1');
        table.string("tag_ensinar2");
        table.string('tag_ensinar3');
        table.uuid("userId_FK").notNullable();

        table.foreign('userId_FK').references('userId').inTable("user")
    
      
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teach')
}