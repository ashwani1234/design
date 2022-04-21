const express = require('express');
const path = require('path');
const app = express();
var router = express.Router();
const port = 2000


app.use(express.static(path.join(__dirname, "../routes")))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, './about.html'));
});

// All requests to this router will
// first hit this middleware

  
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});

