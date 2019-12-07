const express = require('express');
const router = express.Router();
var db = require('../models');

// Get all Burgers
router.get('/', (req, res) => {
  db.Burger.findAll({
    order: [['id', 'ASC']]
  })
    .then(burgers => {
      db.Customer.findAll({
        order: [['id', 'ASC']]
      }).then(customers => {
        res.render('index', {
          title: 'Burgers Page',
          burgers,
          customers
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

// Add a Burger
router.post('/api/burgers', (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(data => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

// Update a Burger
router.put('/api/burgers/:id/:customer_id', (req, res) => {
  db.Burger.update(
    {
      devoured: true,
      CustomerId: req.params.customer_id
    },
    {
      where: { id: req.params.id }
    }
  )
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

// Delete a Burger
router.delete('/api/burgers/:id', (req, res) => {
  db.Burger.destroy({
    where: { id: req.params.id }
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

module.exports = router;
