// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
var sequelize = require('../config/connection.js');

// Creates a "Customer" model that matches up with DB
var Customer = sequelize.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  customer_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured_burgers: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// Syncs with DB
Customer.sync();

// Makes the Customer Model available for other files (will also create a table)
module.exports = Customer;
