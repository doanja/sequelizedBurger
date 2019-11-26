const express = require('express');
// const burgers = require('../config/orm');
const Burger = require('../models/burger');
const router = express.Router();

// Get all Burgers
router.get('/', function(req, res) {
  Burger.findAll({
    order: [['burger_name', 'ASC']]
  }).then(function(results) {
    res.render('index', {
      title: 'Burgers Page',
      data: results
    });
  });
});

// Add a Burger
router.post('/api/burgers', function(req, res) {
  Burger.create({
    burger_name: req.body.burger_name
  }).then(function(results) {
    res.redirect('/');
  });
});

// Add a Burger
router.put('/api/burgers/:id', (req, res) => {
  Burger.update(
    {
      devoured: true
    },
    {
      where: { id: req.params.id }
    }
  ).then(function(rowsUpdated) {
    res.json(rowsUpdated);
  });
});

module.exports = router;
