const Express = require('express');
const { Pool } = require("pg");
const db = require('./queries')

const App = Express();
const bodyParser = require('body-parser')
const cookieSession = require("cookie-session");
const PORT = 8080;
const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const bcrypt = require('bcryptjs');


App.use(cors(corsOptions))
App.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

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
App.get('/users/email/:email', db.findUserByEmail)

App.post("/auth", (req, res) => {
  const email = req.body.user;
  const password = req.body.pwd;
  console.log(password);

  let user;
  db.findUserByEmail(email).then(result => {
    console.log(result);
   let user = result;
   const hashedPassword = user.password
   const access = bcrypt.compareSync(password, hashedPassword);
  console.log();
   if (!access){
    return res.status(401).send('password does not match.');
   }
   //happy path 
   req.session.user_id = user.id;
   res.redirect('/vehicles')
}).catch(error => {
    console.log('error:', error);
    res.status(401).send('no user exists in db')
});
  // console.log("THIS IS MY LOG:" + JSON.stringify(req.body));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});