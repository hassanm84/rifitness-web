const express = require("express");
const router = express.Router();

//Require controller modules
const servicesController = require('../controllers/servicesController');
router.get('/', servicesController.index);
router.get('/high-intensity-interval-training', servicesController.hiit);
router.get('/strength-training', servicesController.strengthTraining);
router.get('/hypertrophy', servicesController.hypertrophy);
router.get('/weight-loss', servicesController.weightLoss);
router.get('/yoga', servicesController.yoga);
router.get('/nutrition-coaching', servicesController.nutritionCoaching);
router.get('/packages', servicesController.packages);

module.exports = router;
