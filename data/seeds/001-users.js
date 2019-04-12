exports.seed = function(knex, Promise) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { name: 'bob' },
        { name: 'alice' },
        { name: 'sam' },
        { name: 'fred' },
      ]);
    });
};
