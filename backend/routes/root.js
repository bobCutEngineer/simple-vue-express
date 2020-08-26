const fs = require ('fs');

var root = function (req, res) {
    fs.readFile('./public/index.html',function(data){
        res.send(data)
    });
}

module.exports = root;