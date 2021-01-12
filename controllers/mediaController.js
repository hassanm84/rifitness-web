exports.pressCoverage = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "press-coverage";
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
      res.locals.pageType = "pressCoverage";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
}

exports.blog = function(req, res) {
  //Issue API requests to Strapi to retrieve content
  const https = require('https');
  const http = require('http');

  const cmsHost = process.env.CMS_HOST;
  const cmsPort = process.env.CMS_PORT;
  const cmsBasePath = process.env.CMS_BASEPATH;
  const rName = "blog";
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
      res.locals.pageType = "blog";
      const today = new Date();
      const year = today.getFullYear();
      res.locals.copyrightYr = year;
      res.render("subjectPage");
    });
  });
}
