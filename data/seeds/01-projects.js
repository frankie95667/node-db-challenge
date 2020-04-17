
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Twitter', description: "An application to waste people's time"},
        {name: 'Google Docs'},
      ]);
};
