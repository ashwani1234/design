const express = require('express');
const path = require('path');
const app = express();
var router = express.Router();
const port = 2000


app.use(express.static(path.join(__dirname, "../routes")))

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, './index.html'));
// });
// app.get('/corona', function(req, res) {
//     res.sendFile(path.join(__dirname, './corona.html'));
// });

// All requests to this router will
// first hit this middleware
router.use(function (req, res, next) {
  console.log("Middleware Called");
  next();
})
// Always invoked
router.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
})
  
app.use('/about', router);
  
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});
app.listen(2000, "0.0.0.0");
