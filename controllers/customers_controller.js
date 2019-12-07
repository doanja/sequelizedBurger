const express = require('express');
const router = express.Router();
var db = require('../models');

// Add a Customer
router.post('/api/customer', (req, res) => {
  db.Customer.create({
    customer_name: req.body.customer_name
  })
    .then(data => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

module.exports = router;
