const express = require("express");
const router = express.Router();

//Require controller modules
const mediaController = require('../controllers/mediaController');
router.get('/blog', mediaController.blog);
router.get('/press-coverage', mediaController.pressCoverage);

module.exports = router;
