exports.pressCoverage = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Press Coverage | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-suzy-hazelwood-3866816.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Press Coverage";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "pressCoverage";

   //Content
   res.locals.contMainHeading="Watch this space!";
   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};

exports.blog = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Fitness Blog | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-841130.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Fitness Blog";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "blog";

   //Content
   res.locals.contMainHeading="Watch this space!";

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};
