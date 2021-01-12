exports.index = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "services-overview";
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

      res.locals.servCats =content.services_ov_blocks;
      res.locals.pageType = "faqs";

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("servicesOverview");
    });
  });

};

exports.hiit = function(req, res) {

  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "hiit-page";
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

      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;

      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            },
                            {"title": content.subjectSect2Title,
                              "body": content.subjectSect2Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
}

exports.strengthTraining = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "st-page";
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

      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;

      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

};

exports.hypertrophy = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "hypertrophy-page";
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

      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;


      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
}

exports.weightLoss = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "wt-page";
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

      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;


      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

}

exports.yoga = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "yoga-page";
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

      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;


      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

}

exports.nutritionCoaching = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "nutrition-coaching";
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
      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;


      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];

      // Template variables for the 'Footer' section
      res.locals.pageType = "services";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });

}


exports.packages = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "packages-page";
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
      res.locals.enquiryBtnTxt =content.enquiryBtnTxt;
      res.locals.enquiryBtnLnk = content.enquiryBtnLnk;
      res.locals.pkgsBtnTxt = content.pkgsBtnTxt;
      res.locals.pkgsBtnLnk = content.pkgsBtnLnk;


      res.locals.subjectSections = [{"title": content.subjectSect1Title,
                              "body": content.subjectSect1Body
                            }
                           ];
      res.locals.subscription_plans= content.subscription_plans;

      // Template variables for the 'Footer' section
      res.locals.pageType = "packages";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });




}
