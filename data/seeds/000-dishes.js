exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "Lasagna" }, // 1
    { name: "Flan" }, // 2
    { name: "Baked Ziti" }, // 3
    { name: "Pizza" } // 4
  ]);
};
