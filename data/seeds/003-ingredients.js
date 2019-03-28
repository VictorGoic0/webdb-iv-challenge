exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "Tomatoes" }, // 1
    { name: "Sugar" }, // 2
    { name: "Flour" }, // 3
    { name: "Eggs" } // 4
  ]);
};
