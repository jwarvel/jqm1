var express = require('express');
var app = express();

app.use(express.static(__dirname ));

var port = Number(process.env.PORT || 5001);
app.listen(port, function() {
    console.log("Listening on " + port);
});

app.post('/', function(req, res) {
    setTimeout( function(){
        res.send('this is a test');
    }, 86400000 );
});