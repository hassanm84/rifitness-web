exports.index = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "about-overview";
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

      res.locals.l2BannerImg =content.l2BannerImg.url;
      res.locals.l2BannerHeading1 = content.l2BannerHeading1;

      res.locals.ovBlocks = content.about_ov_blocks;

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("mainOverviewPage");
    });
  });
}


exports.backstory = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "backstory-page";
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

      res.locals.subjectSections=[{
                                   "title" : content.sect1Title,
                                   "body" : content.sect1Body
                                    },
                                  {
                                   "title" : content.sect2Title,
                                   "body" : content.sect2Body
                                 }];

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.locals.pageType === "services"
      res.render("subjectPage");
    });
  });
}


exports.ethos = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "ethos-page";
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

      res.locals.subjectSections=[{
                                   "title" : content.subjectSect1Title,
                                   "body" : content.subjectSect1Body
                                    },
                                  ];

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.locals.pageType === "services"
      res.render("subjectPage");
    });
  });
};

exports.fitnessRoadmap = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "fitness-roadmap";
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

      res.locals.subjectSections=[{
                                   "title" : content.subjectSect1Title,
                                   "body" : content.subjectSect1Body
                                    },
                                  ];

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.locals.pageType === "services"
      res.render("subjectPage");
    });
  });
};

exports.faqs = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "faqs-page";
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

      res.locals.faqs=content.faqs;
      res.locals.pageType = "faqs";

      // Template variables for the 'Footer' section
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
};
