const express = require('express');
const data = require('./data/data.json');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(function(req, res, next){
    console.log(`${req.method} requrest for ${req.url}`);
    next();
});

app.get('/getjson', function(req, res){
    res.json(data);
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
    console.log(`Server is running on port ${app.get('port')}`);
});
