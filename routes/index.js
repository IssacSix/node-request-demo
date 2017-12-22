var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html')
});

router.get('/index.html', function (req, res, next) {
  res.sendfile('./views/page2.html')
});

router.get('/api/test', function (req, res, next) {

  var _res = res
  request('http://10.4.110.78:3200/java/api/test', function(err, res, body) {
     if (err) console.log(err)
     console.log(res.headers)
     _res.json(JSON.parse(body))

  })

});

router.get('/img/1', function(req, res, next) {

  console.log(1)

  request
    .get('http://10.4.110.78:3200/images/gallery77.jpg')
    .on(res, function(res) {
      console.log(res.statusCode)
      console.log(res.headers)
    })
})

module.exports = router;
