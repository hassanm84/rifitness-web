const { check } = require('express-validator');
const { validationResult } = require('express-validator');

exports.personalTraining = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "contact-pt";
  const baseUrl="http://" + cmsHost + ":" + cmsPort;
  const url="http://" + cmsHost + ":" + cmsPort + cmsBasePath + rName;

  http.get(url, function(apiRes){
    let data="";

    apiRes.on('data', function(chunk){
      data += chunk;
    });

    apiRes.on('end', function(){
      let content = JSON.parse(data);

      res.locals.baseUrl= baseUrl;
      res.locals.title = content.title;



      const errors =[];
      res.locals.errors=errors;

      //Banner Heading
      res.locals.l2BannerImg = content.l2BannerImg.url;
      res.locals.l2BannerHeading1 = content.l2BannerHeading1;

      res.locals.pageType = "contact-pt";
      const validFlag = 2;
      res.locals.validFlag = 2;

      //Content
      res.locals.formTitle  = content.formTitle;
      res.locals.formSbtBtnTxt= content.formSbtBtnTxt;

      res.locals.nxtStp1IconName = content.nxtStp1IconName;
      res.locals.nxtStp2IconName = content.nxtStp2IconName;
      res.locals.nxtStp3IconName = content.nxtStp3IconName;
      res.locals.nxtStp1Txt = content.nxtStp1Txt;
      res.locals.nxtStp2Txt = content.nxtStp2Txt;
      res.locals.nxtStp3Txt = content.nxtStp3Txt;
      // Template variables for the 'Footer' section
      res.locals.pageType = "contact-pt";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
}

exports.corporate = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "contact-cw";
  const baseUrl="http://" + cmsHost + ":" + cmsPort;
  const url="http://" + cmsHost + ":" + cmsPort + cmsBasePath + rName;

  http.get(url, function(apiRes){
    let data="";

    apiRes.on('data', function(chunk){
      data += chunk;
    });

    apiRes.on('end', function(){
      let content = JSON.parse(data);

      res.locals.baseUrl= baseUrl;
      res.locals.title = content.title;

      res.locals.l2BannerImg = content.l2BannerImg.url;
      res.locals.l2BannerHeading1 = content.l2BannerHeading1;
      res.locals.contMainHeading =content.placeholderHeading1;

      // Template variables for the 'Footer' section
      res.locals.pageType = "corporate";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

};

exports.careers = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "careers";
  const baseUrl="http://" + cmsHost + ":" + cmsPort;
  const url="http://" + cmsHost + ":" + cmsPort + cmsBasePath + rName;

  http.get(url, function(apiRes){
    let data="";

    apiRes.on('data', function(chunk){
      data += chunk;
    });

    apiRes.on('end', function(){
      let content = JSON.parse(data);

      res.locals.baseUrl= baseUrl;
      res.locals.title = content.title;

      res.locals.l2BannerImg = content.l2BannerImg.url;
      res.locals.l2BannerHeading1 = content.l2BannerHeading1;
      res.locals.contMainHeading =content.placeholderHeading1;

      // Template variables for the 'Footer' section
      res.locals.pageType = "careers";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

};


exports.formProcessor = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "contact-pt";
  const baseUrl="http://" + cmsHost + ":" + cmsPort;
  const url="http://" + cmsHost + ":" + cmsPort + cmsBasePath + rName;

  http.get(url, function(apiRes){
    let data="";

    apiRes.on('data', function(chunk){
      data += chunk;
    });

    apiRes.on('end', function(){
      let content = JSON.parse(data);

      res.locals.baseUrl= baseUrl;
      res.locals.title = content.title;

      var errors =[];

      //Banner Heading
      res.locals.l2BannerImg = content.l2BannerImg.url;
      res.locals.l2BannerHeading1 = content.l2BannerHeading1;

      res.locals.pageType = "contact-pt";

      //Content
      res.locals.formTitle  = content.formTitle;
      res.locals.formSbtBtnTxt= content.formSbtBtnTxt;

      res.locals.nxtStp1IconName = content.nxtStp1IconName;
      res.locals.nxtStp2IconName = content.nxtStp2IconName;
      res.locals.nxtStp3IconName = content.nxtStp3IconName;
      res.locals.nxtStp1Txt = content.nxtStp1Txt;
      res.locals.nxtStp2Txt = content.nxtStp2Txt;
      res.locals.nxtStp3Txt = content.nxtStp3Txt;
      // Template variables for the 'Footer' section
      res.locals.pageType = "contact-pt";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;

      //Process contact form data
      errors = validationResult(req);
      if (!errors.isEmpty()) {
        let frmValdStat = false;
         //res.status(422).json({ errors: errors.array() });
         //return;
         var validFlag= 0;
         res.locals.validFlag =validFlag;
         res.locals.errors = errors.array();
         res.render("subjectPage" )
       }
       else{
         let frmValdTxt = "Your enquiry has been submitted. We will be in contact in the next 2-3 days.";
         var validFlag= 1;
         res.locals.validFlag= validFlag;
         res.locals.frmValdTxt=frmValdTxt;
         res.render("subjectPage");
       }
    });
  });
}


exports.validate = (method) => {
  switch (method) {
    case 'formProcessor': {
     return [
        check('fName', 'Invalid first name').exists().notEmpty(),
        check('lName', 'Invalid last name').exists().notEmpty(),
        check('phone', 'Invalid telephone number').exists().isNumeric(),
        check('email', 'Invalid email').isEmail(),
        check('message', 'Invalid input in message field').exists().notEmpty()
       ]
    }
  }
}
