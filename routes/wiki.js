const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.get('/', function(req, res, next) {
    res.redirect('/');
});

router.post('/', function(req, res, next) {
    // agregá definiciones para  `title` y `content`
    var page = Page.create({
      title: req.body.title,
      content: req.body.content,
      urlTitle: req.body.url_title
    });
    // Asegurate que solo redirigimos **luego** que nuestro create esta completo!
    // nota:  `.create` devuelve una promesa 
    // -> después del create -> res.redirect('/');
  });
  
router.get('/add', function(req, res) {
    res.render('addpage');
  });

module.exports = router;