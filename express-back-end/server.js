const Express = require('express');
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");
const db = require('./queries')

const App = Express();
const bodyParser = require('body-parser')
const PORT = 8080;
const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

App.use(cors(corsOptions))

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

App.post("/auth", (req, res) => {
  console.log("THIS IS MY LOG:" + JSON.stringify(req.body));
  // database.updateUser(id, req.body).then((result) => {
  //   res.redirect("/profile");
  // });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});