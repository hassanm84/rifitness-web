exports.index = function(req, res) {
    //Make API calls to Strapi to get the content and then render it into the template
    //Title
     res.locals.title = "About | RiFitness";
     //Banner image
     res.locals.l2BannerImg = "pexels-pixabay-416717.jpg"

     //Banner Heading
     const l2BannerHeading1 = "About Us";
     res.locals.l2BannerHeading1 = l2BannerHeading1;
     //Template variables for the content section
     const ovBlocks = [{
                        "iconName": "fa-star",
                        "title": "Our Backstory & Vision",
                        "summary": "Lorem ipsum dolor sit amet, consectetur adipisc jhdubeyrvb uwbhduuwudub",
                        "buttonTxt": "Find out more",
                        "detailsPageLink": "/about/backstory"
                      },
                      { "iconName": "fa-clipboard-list",
                        "title": "The RiFitness Ethos",
                        "summary": "Lorem ipsum dolor sit amet, consectetur adipisc jhdubeyrvb uwbhduuwudub",
                        "buttonTxt": "Find out more",
                        "detailsPageLink": "/about/ethos"
                      },
                      {
                        "iconName": "fa-road",
                        "title": "Client Fitness Roadmap",
                        "summary": "Lorem ipsum dolor sit amet, consectetur adipisc jhdubeyrvb uwbhduuwudub",
                        "buttonTxt": "Find out more",
                        "detailsPageLink": "/about/fitness-roadmap"
                      }
                    ];

     res.locals.ovBlocks = ovBlocks;

     // Template variables for the 'Footer' section
     const today = new Date();
     const year = today.getFullYear();
     res.locals.copyrightYr = year;

     res.render("mainOverviewPage");
};


exports.backstory = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Our Backstory & Vision | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-pixabay-416717.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Our Backstory & Vision";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   //Template variables for the content section
   const subjectSections = [{
                              "title":"RiFitness Backstory",
                               "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br> Tempus quam pellentesque nec nam aliquam sem et. Potenti nullam ac tortor vitae purus. Nibh sed pulvinar proin gravida hendrerit lectus a. Orci dapibus ultrices in iaculis nunc sed augue. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nec nam aliquam sem et tortor consequat id porta nibh. Senectus et netus et malesuada fames ac turpis egestas sed. Vel quam elementum pulvinar etiam non quam. Pretium fusce id velit ut. <br><br> Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
                            },
                            {
                             "title":"The Road Ahead",
                              "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet.<br><br> Tempus quam pellentesque nec nam aliquam sem et. Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Porttitor lacus luctus accumsan tortor posuere ac. Eget aliquet nibh praesent tristique magna sit. A orci sagittis eu volutpat. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus."
                           }
                           ];
    res.locals.subjectSections = subjectSections;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};


exports.ethos = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Our Ethos | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-703016.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Our Ethos";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   //Template variables for the content section
   const subjectSections = [{
                              "title":"What Drives our Vision?",
                               "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br> Tempus quam pellentesque nec nam aliquam sem et. Potenti nullam ac tortor vitae purus. Nibh sed pulvinar proin gravida hendrerit lectus a. Orci dapibus ultrices in iaculis nunc sed augue. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nec nam aliquam sem et tortor consequat id porta nibh. Senectus et netus et malesuada fames ac turpis egestas sed. Vel quam elementum pulvinar etiam non quam. Pretium fusce id velit ut. <br><br> Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
                            }
                           ];
    res.locals.subjectSections = subjectSections;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};

exports.fitnessRoadmap = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Client Fitness Roadmap | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-841130.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Your Fitness Roadmap";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   //Template variables for the content section
   const subjectSections = [{
                              "title":"What would it take to become fit?",
                               "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam. Id nibh tortor id aliquet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit amet. <br><br> Tempus quam pellentesque nec nam aliquam sem et. Potenti nullam ac tortor vitae purus. Nibh sed pulvinar proin gravida hendrerit lectus a. Orci dapibus ultrices in iaculis nunc sed augue. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nec nam aliquam sem et tortor consequat id porta nibh. Senectus et netus et malesuada fames ac turpis egestas sed. Vel quam elementum pulvinar etiam non quam. Pretium fusce id velit ut. <br><br> Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Dignissim convallis aenean et tortor at risus viverra. Sed blandit libero volutpat sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est."
                            }
                           ];
    res.locals.subjectSections = subjectSections;

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};

exports.faqs = function(req, res) {
    //Make API calls to Strapi to get the content and then render it into the template
    const pageType = true;
    res.locals.pageType = pageType;
    //Title
     res.locals.title = "FAQs | RiFitness";
     //Banner image
     res.locals.l2BannerImg = "pexels-victor-freitas-841130.jpg"

     //Banner Heading
     const l2BannerHeading1 = "Frequently Asked Questions";
     res.locals.l2BannerHeading1 = l2BannerHeading1;

     //Template variables for the content section
     const faqs = [{  "question": "Et malesuada fames ac turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.?",
                      "answer" : "Tempus quam pellentesque nec nam aliquam sem et"
                    },
                    { "question": "Is fitness training only for rich people? Poor people can't afford gym or fitness instructors. What should they do? ",
                      "answer" : "That is your fu***n problem. Why are you poor? Become rich and then you can also afford gym or fitness training!"
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    },
                    { "question": "Potenti nullam ac tortor vitae purus?",
                      "answer" : "Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis."
                    }
                  ];
      res.locals.faqs = faqs;

     // Template variables for the 'Footer' section
     const today = new Date();
     const year = today.getFullYear();
     res.locals.copyrightYr = year;
     res.render("subjectPage");
};
