/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, Name: 'Bird'},
    {id: 2, Name: 'Cat'},
    {id: 3, Name: 'Dog'},
    {id: 4, Name: 'Fish'}
  ]);
};