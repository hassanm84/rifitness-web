const { check, validationResult } = require('express-validator');
exports.formProcessor= [
        "check('email').isEmail()"
      ];
