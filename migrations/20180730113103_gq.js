
exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", function (table) {
    table.increments('number').notNullable();
    table.integer('count').notNullable().defaultTo(0);
    table.string('question');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("questions");
};
