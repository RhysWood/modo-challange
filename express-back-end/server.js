const Express = require('express');
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");
const db = require('./queries')

const App = Express();
const bodyParser = require('body-parser')
const PORT = 8080;

// Express Configuration
App.use(bodyParser.json())
App.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
App.use(Express.static('public'));

App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/users', db.getUsers)
App.get('/vehicles', db.getVehicles)
App.get('/users/:id', db.getUserById)

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});