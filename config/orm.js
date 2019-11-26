var Burger = require('../models/burger');

const findAll = () => {
  Burger.findAll({}).then(function(res) {
    console.log(res);
    return res;
  });
};

//WIP return something else
const create = () => {
  Burger.create({
    burger_name: req.body.author
  }).then(res => {
    return results;
  });
};

//WIP
const updateOne = () => {
  Burger.update({
    burger_name: req.body.author
  }).then(res => {
    return results;
  });
};

module.exports = {
  findAll,
  create,
  updateOne
};
