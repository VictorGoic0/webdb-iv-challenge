exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 0, ingredients_id: 0 }, // 1
    { recipe_id: 3, ingredients_id: 2 }, // 2
    { recipe_id: 1, ingredients_id: 3 }, // 3
    { recipe_id: 3, ingredients_id: 0 } // 4
  ]);
};
