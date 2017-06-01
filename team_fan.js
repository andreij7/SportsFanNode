var express = require('express')
var router = express.Router()

var fs = require('fs');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/:zip_code', function (req, res) {

  fs.readFile('fan_favs.json', 'utf8', function(err, data){
    if(err) throw err
    obj = JSON.parse(data)
    res.send(obj[req.params.zip_code])
  });
  
})

module.exports = router