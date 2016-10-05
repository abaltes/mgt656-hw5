var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/odd-crocodile', function(request, response){
    response.send('Hello odd-crocodile');
});

app.listen(process.env.PORT || 4000);