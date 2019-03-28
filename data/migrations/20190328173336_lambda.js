exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", table => {
    table.increments();
  });
};

exports.down = function(knex, Promise) {};
