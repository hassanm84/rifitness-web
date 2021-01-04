const express = require("express");
const router = express.Router();

//Require controller modules
const aboutController = require('../controllers/aboutController');
router.get('/', aboutController.index);
router.get('/backstory', aboutController.backstory);
router.get('/ethos', aboutController.ethos);
router.get('/fitness-roadmap', aboutController.fitnessRoadmap);
router.get('/faqs', aboutController.faqs);

module.exports = router;
