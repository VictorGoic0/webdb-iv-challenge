exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "Placeholder Lasagna Recipe" }, // 1
    { name: "Placeholder Flan Recipe" }, // 2
    { name: "Placeholder Ziti RecipeBaked" }, // 3
    { name: "Placeholder Pizza Recipe" } // 4
  ]);
};
