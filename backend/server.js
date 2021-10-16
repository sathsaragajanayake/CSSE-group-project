const  express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB.js');

const app = express();

//const mainRoutes = require('./routes/main_routes.js');

mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use('/home',mainRoutes);
//app.use('/login',mainRoutes);

//connect to database
mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {console.log('Database is now conneted')},
    err => {console.log('cannot connect to database' + err)}
);

//sanduni
app.use('/bus',require('./routes/BusRouter'));
app.use('/passanger',require('./routes/passangerRouter'));

app.listen(3001 , () => console.log("Server is started"));;