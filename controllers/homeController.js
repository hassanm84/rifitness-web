exports.index = function(req, res) {
    //Make API calls to Strapi to retrieve content
    const https = require('https');
    const http = require('http');

    const cmsHost = process.env.CMS_HOST;
    const cmsPort = process.env.CMS_PORT;
    const cmsBasePath = process.env.CMS_BASEPATH;
    const rName = "home-page";
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
        res.locals.title = content.pageTitle;
        res.locals.bannerHeading1 = content.bannerHeading1;
        res.locals.bannerHeading2 = content.bannerHeading2;
        res.locals.bannerHeading3 = content.bannerHeading3;
        res.locals.bannerButtonText = content.bannerButtonText;
        res.locals.bannerButtonLink = content.bannerButtonLink;

        res.locals.sumDetailsButtonTxt = content.sumDetailsButtonTxt;

        res.locals.sumServHeading = content.sumServHeading;
        res.locals.sumServSubHeading = content.sumServSubHeading;
        res.locals.sumServDetBtnLnk = content.sumServDetBtnLnk;


        res.locals.sumNutritionHeading = content.sumNutritionHeading;
        res.locals.sumNutritionSubHeading = content.sumNutritionSubHeading;
        res.locals.sumNutDetBtnLnk = content.sumNutDetBtnLnk;

        res.locals.sumWorkshopsHeading = content.sumWorkshopsHeading;
        res.locals.sumWorkshopsSubHeading = content.sumWorkshopsSubHeading;
        res.locals.sumWrksDetBtnLnk = content.sumWrksDetBtnLnk ;

        res.locals.packagesHeading = content.packagesHeading;
        res.locals.packagesDetailBtnTxt = content.packagesDetailBtnTxt;
        res.locals.packagesBannerImg = baseUrl + content.packagesBannerImage.url;
        res.locals.pkgsBtnLnk = content.pkgsBtnLnk;
        res.locals.testimonialsHeading = content.testimonialsHeading;

        res.locals.bannerImages=[
                            baseUrl + content.bannerImage1.url,
                            baseUrl + content.bannerImage2.url,
                            baseUrl + content.bannerImage3.url,
                            baseUrl + content.bannerImage2.url
                          ];

        res.locals.testimonials = content.testimonials;

        res.locals.featuredImages = [ baseUrl + content.lastSectImage1.url,
                                 baseUrl + content.lastSectImage2.url,
                                 baseUrl + content.lastSectImage3.url,
                                 baseUrl + content.lastSectImage4.url
                               ];


        // Template variables for the 'Footer' section
        const today = new Date();
        const year = today.getFullYear();
        res.locals.copyrightYr = year;
        res.render("home");
      });
    });
}
