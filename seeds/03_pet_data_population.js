/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, Name: 'Figaro', pet_type_id: 2, food_type_id: 1},
    {id: 2, Name: 'Fat Sam', pet_type_id: 3, food_type_id: 1},
    {id: 3, Name: 'Moki', pet_type_id: 3, food_type_id: 1},
    {id: 4, Name: 'Cleo', pet_type_id: 4, food_type_id: 2},
  ]);
};
