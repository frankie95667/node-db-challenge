
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments();
        
        tbl.string("name", 255)
        .notNullable();
        
        tbl.text("description");
        
        tbl.boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
        tbl.increments();
        
        tbl.string("name", 255)
        .notNullable();
        
        tbl.text("description");
    })
    .createTable("project_resources", tbl => {
        tbl.increments();
        
        tbl.integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl.unique(["project_id", "resource_id"]);
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        
        tbl.text("description")
        .notNullable();
        
        tbl.text("notes");
        
        tbl.boolean("completed")
        .notNullable()
        .defaultTo(false);
        
        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks")
  .dropTableIfExists("project_resources")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects");
};
