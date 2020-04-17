
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'laptop', description: "a foldable computer"},
        {name: 'desk phone', description: "why do we need this"},
        {name: 'desk'}
      ]);
};
