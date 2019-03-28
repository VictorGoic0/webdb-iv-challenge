const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

function find() {
  return db("dishes");
}

function findById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function create(item) {
  return db("dishes")
    .insert(item)
    .then(([id]) => {
      return findById(id);
    });
}

function remove(id) {
  return db("dishes")
    .where({ id })
    .del()
    .then(res => {
      console.log(res);
      return res;
    });
}

function update(item, id) {}
