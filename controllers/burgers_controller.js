const express = require('express');
// const burgers = require('../config/orm');
const Burger = require('../models/burger');
const router = express.Router();

// Get all Burgers
router.get('/', function(req, res) {
  Burger.findAll({}).then(function(results) {
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
  console.log('updated called', req.params.id);
  Burger.update(
    {
      devoured: true
    },
    {
      where: { id: req.params.id }
    }
  ).then(function(rowsUpdated) {
    console.log('updated-----------==========--------');
    res.json(rowsUpdated);
  });
});

// router.put('/api/burgers/:id', (req, res) => {
//   burgers.updateOne({ devoured: 1 }, 'id = ' + req.params.id, data => {
//     if (data.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     // reponse good, row changed
//     res.status(200).end();
//   });
// });

module.exports = router;
