const Express = require('express');
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");

const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const client = new Pool({
    user: "rhyswood",
    host: "localhost",
    database: "modo",
    password: "1234",
    port: "5432"
  });

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));


App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});