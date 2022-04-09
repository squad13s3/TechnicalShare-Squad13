
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {

        table.string('name').notNullable();
        table.string("lastname").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("birthdate").notNullable();
        table.string("specialization");
        table.string("hastags");
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
