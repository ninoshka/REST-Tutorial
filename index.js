const express =require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = 8080;
app.get('/',(req,res)=>
                {res.send("Hellos World with Express and Nodemon");}
       );

app.listen(port,()=>{console.log("Running the application");});

const apiRoutes = require('./api-route');

//app.use is basically used when the app 'USES a MIDDLEWARE'
app.use('/api',apiRoutes);

const mongoose= require('mongoose');
//connecting to db resthub
mongoose.connect('mongodb://localhost:27017/myapp');
var db = mongoose.connection;
mongoose.connection.on('connected', function(){
        console.log("hello we have connected to the db");

});
mongoose.connection.on('error', function(){});
mongoose.connection.on('disconnected', function(){});
