const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 4000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Sets up the Express app to handle data parsing (needed to process POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.use('/', require('./controllers/burgers_controller'));
app.use('/', require('./controllers/customers_controller'));

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
