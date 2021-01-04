exports.index = function(req, res) {
    //Make API calls to Strapi to get the content and then render it into the template
    //Title
     res.locals.title = "Services | RiFitness";
     //Banner image
     res.locals.l2BannerImg = "pexels-pixabay-416717.jpg"

     //Banner Heading
     const l2BannerHeading1 = "Our Services";
     res.locals.l2BannerHeading1 = l2BannerHeading1;
     //Template variables for the content section
     const servCats = [{ "title": "HIGH INTENSITY INTERVAL TRAINING",
                         "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                         "detBtnTxt": "Learn More",
                         "imgName": "pexels-ivan-samkov-4164658.jpg",
                         "detPgLnk": "/services/high-intensity-interval-training"
                       },
                        { "title": "Strength Training",
                        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                        "detBtnTxt": "Learn More",
                        "imgName": "pexels-victor-freitas-791762.jpg",
                        "detPgLnk": "/services/strength-training"
                        },
                        { "title": "Hypertrophy",
                        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                        "detBtnTxt": "Learn More",
                        "imgName": "pexels-victor-freitas-949129.jpg",
                        "detPgLnk": "/services/hypertrophy"
                        },
                        { "title": "Weight Loss Training",
                        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                        "detBtnTxt": "Learn More",
                        "imgName": "pexels-andrea-piacquadio-3757957.jpg",
                        "detPgLnk": "/services/weight-loss"
                        },
                        { "title": "Yoga",
                        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                        "detBtnTxt": "Learn More",
                        "imgName": "pexels-tima-miroshnichenko-5928615.jpg",
                        "detPgLnk": "/services/yoga"
                        },
                        { "title": "Nutrition Coaching",
                        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu." ,
                        "detBtnTxt": "Learn More",
                        "imgName": "pexels-foodie-factor-566566.jpg",
                        "detPgLnk": "/services/nutrition-coaching"
                        }
                     ];

     res.locals.servCats = servCats;
     // Template variables for the 'Footer' section
     const today = new Date();
     const year = today.getFullYear();
     res.locals.copyrightYr = year;

     res.render("servicesOverview");
};

exports.hiit = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "HIIT | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "hiit-rifitness.jpeg"

   //Banner Heading
   const l2BannerHeading1 = "High Intensity Interval Training";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Full Body HIIT",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    },
    {
    "title":"Cardio HIIT",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet.<br><br> Tempus quam pellentesque nec nam aliquam sem et. Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Porttitor lacus luctus accumsan tortor posuere ac. Eget aliquet nibh praesent tristique magna sit. A orci sagittis eu volutpat. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};

exports.strengthTraining = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Strength Training | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-841130.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Strength Training";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Strength Training Aligned with Your Goals",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};

exports.hypertrophy = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Hypertrophy Training | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-pixabay-50597.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Hypertrophy Training";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Build the RiFitness Way!",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    },

    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");


};

exports.weightLoss = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Weight Loss | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-william-choquette-1954524.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Weight Loss Training";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Empirically Proven Weight Loss Training Programmes",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};

exports.yoga = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Yoga | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-tima-miroshnichenko-5928615.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Yoga";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Do Yoga the RiFitness Way!",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};

exports.nutritionCoaching = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Nutrition Coaching | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-foodie-factor-566566.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Nutrition Coaching";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "services";

   //Content
    const subjectSections = [{
    "title":"Bespoke Goal-Oriented Diet Plans",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};


exports.packages = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Personal Training Packages | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-841134.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Our Packages";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "packages";

   //Content
    const subjectSections = [{
    "title":"Monthly Subscription Options",
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br>Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
    }
    ];
    res.locals.subjectSections = subjectSections;

    const enquiryBtnTxt = "Enquire Now";
    res.locals.enquiryBtnTxt = enquiryBtnTxt;

    const enquiryBtnLnk ="/contact/personal-training";
    res.locals.enquiryBtnLnk = enquiryBtnLnk;

    const pkgsBtnTxt = "View Packages";
    res.locals.pkgsBtnTxt = pkgsBtnTxt;

    const pkgsBtnLnk ="/services/packages";
    res.locals.pkgsBtnLnk = pkgsBtnLnk;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};
