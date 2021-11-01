exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id");
    table.string("title", 128).notNullable().unique();
    table.string("description").notNullable();
    table.string("repo").notNullable();
    table.string("demo").notNullable();
    table.string("img_url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
