/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, Name: 'kibble', description: 'dry, dull, small bits of food'},
    {id: 2, Name: 'live feed', description: 'crickets, worms, mice'},
    {id: 3, Name: 'seed', description: 'grains, seeds, nuts'},
  ]);
};
