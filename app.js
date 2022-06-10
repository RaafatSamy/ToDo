const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const db_url = "mongodb://localhost:27017/ToDo";
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
app.set('view engine' , 'ejs');


// connect with database


mongoose.connect(db_url).then(()=>{
    console.log('connect successfully with database')
}).catch(err=>{
    console.log('Error to connect to database '+ err)
});

// import route

const postRoute = require('./routes/post.route');



app.use('/' , postRoute)


app.listen(port , ()=> console.log('Server running successfully'))