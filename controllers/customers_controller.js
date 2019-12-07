const express = require('express');
const router = express.Router();
var db = require('../models');

// Get all Customers
router.get('/api/customer', (req, res) => {
  db.Customer.findAll({
    order: [['id', 'ASC']]
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

// Add a Customer
router.post('/api/customer', (req, res) => {
  db.Customer.create({
    customer_name: req.body.customer_name
  })
    .then(data => {
      // console.log('success customer created', data.dataValues);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

// Delete a Customer
router.delete('/api/customer/:id', (req, res) => {
  db.Customer.destroy({
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
