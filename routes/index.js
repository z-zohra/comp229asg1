var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home Page' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home Page' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { title: 'About Page' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { title: 'Projects Page' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services Page' });


});
/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { title: 'Contact Page' });
});
module.exports = router;
