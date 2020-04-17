const cleanup = require('knex-cleaner');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleanup.clean(knex, {
    mode: 'truncate',
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  })
};
