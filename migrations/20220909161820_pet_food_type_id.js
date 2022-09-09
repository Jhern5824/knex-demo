/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('pet', table => {
        table.integer('food_type_id');
        table.foreign('food_type_id').references('food_type.id').deferrable('deferred');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pet', table => {
        table.dropForeign('food_type_id');
        table.dropColumn('food_type_id');
    });
};
