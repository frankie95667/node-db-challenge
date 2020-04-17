
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Take the trash out', project_id: 1},
        {description: 'add numbers together', notes: "This is for children", project_id: 2},
        {description: 'Dance the jig', notes: "I love dancing", project_id: 1}
      ]);
};
