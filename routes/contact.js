const express = require("express");
const router = express.Router();
const app = express();

const bodyParser = require("body-parser");
const validator = require("validator");
//Require controller modules
const contactController = require('../controllers/contactController');

router.get('/personal-training', contactController.personalTraining);
router.get('/corporate', contactController.corporate);
router.get('/careers', contactController.careers);
router.post('/personal-training', contactController.validate('formProcessor'), contactController.formProcessor);

module.exports = router;
