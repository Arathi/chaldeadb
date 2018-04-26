var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/servant', function(req, resp) {
  models.Servant.findAll().then(servants => {
    resp.json(servants);
  });
});

module.exports = router;
