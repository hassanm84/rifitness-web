exports.index = function(req, res) {
    // Template variables for the 'Footer' section


    //Make API calls to Strapi to get the content and then render it into the template


    // Template variables for the 'Introduction' section

    const bannerImages=[
                        "pexels-victor-freitas-949129.jpg",
                        "pexels-scott-webb-28054.jpg",
                        "pexels-victor-freitas-841134.jpg",
                        "pexels-estudio-polaroid-3112004.jpg"
                      ];
    res.locals.bannerImages = bannerImages;
    res.locals.bannerHeading1 = "RiFitness";
    res.locals.bannerHeading2 = "Personal training to help you become the best version of yourself.";
    res.locals.bannerHeading3 = "Milton Keynes, London and beyond";
    res.locals.bannerButtonText = "Start your journey";
    res.locals.title = "RiFitness - Elite Fitness Training";
    res.locals.bannerButtonLink = "/about/fitness-roadmap";

    // Template variables for the 'Summary' section
    res.locals.sumPtHeading = "Personal Training";
    res.locals.sumPtSubHeading = "Training developed around your schedule and tailored to your requirements.";
    res.locals.sumServDetBtnLnk="/services";
    res.locals.sumServDetBtnTxt="Learn More";
    res.locals.sumNutritionHeading = "Nutrition Coaching";
    res.locals.sumNutritionSubHeading = "Bespoke nutrition plans aligned with your training regime.";
    res.locals.sumNutDetBtnLnk="/services/nutrition-coaching";

    res.locals.sumWorkshopsHeading = "Corporate workshops";
    res.locals.sumWorkshopsSubHeading = "Result oriented regular training workshops for groups.";
    res.locals.sumDetailsButtonTxt = "Learn More";
    res.locals.sumWrksDetBtnLnk="/contact/corporate"

    // Template variables for the 'Packages Overview' section
    res.locals.packagesHeading = "Results that speak for themselves";
    res.locals.packagesDetailBtnTxt = "View our packages";
    res.locals.pkgsBtnLnk="/services/packages"

    // Template variables for the 'Packages Overview' section
    res.locals.testimonialsHeading= "What our clients say about us.";
    const testimonialsSlide1 = [
      {
        "title":"Ornare arcu dui vivamus arcu felis bibendum",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam vestibulum morbi. ",
        "person":
          {
            "imageName":"RebeccaH.jpeg",
            "name": "Rebecca",
            "location": "London"
          }
        },
        {
          "title":"Abore et dolore magna aliqua. Ornare arcu dui",
          "body":"Lorem ipsum dolor sit amet,  Urna duis convallis convallis tellus id interdum velit. Donec pretium vulputate sapien nec. Egestas tellus rutrum tellus pellentesque. Ut aliquam purus sit amet luctus venenatis. Velit sed ullamcorper morbi tincidunt. Faucibus purus in massa tempor nec. Eget dolor morbi non arcu risus quis. Non arcu risus quis varius.",
          "person":
            {
              "imageName":"AlistairS.jpeg",
              "name": "Alistair",
              "location": "Milton Keynes"
            }
          },
          {
            "title":"Urna duis convallis convallis tellus id interdum velit.",
            "body":"Lorem ipsum dolor sit amet,  Urna duis convallis convallis tellus id interdum velit. Donec pretium vulputate sapien nec. Egestas tellus rutrum tellus pellentesque. Ut aliquam purus sit amet luctus venenatis. Velit sed ullamcorper morbi tincidunt. Faucibus purus in massa tempor nec. Eget dolor morbi non arcu risus quis.",
            "person":
              {
                "imageName":"JoshT.jpeg",
                "name": "Josh",
                "location": "Fairfields"
              }
            }
      ];

      const testimonialsSlide2 = [
        {
          "title":"Urna duis convallis convallis tellus id interdum velit.",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam vestibulum morbi. Urna duis convallis convallis tellus id interdum velit. Donec pretium vulputate sapien nec.",
          "person":
            {
              "imageName":"NatashaK.jpeg",
              "name": "Natasha",
              "location": "Oxford"
            }
          },
          {
            "title":"sed do eiusmod tempor incididunt ut",
            "body":"Egestas tellus rutrum tellus pellentesque. Ut aliquam purus sit amet luctus venenatis. Velit sed ullamcorper morbi tincidunt. Faucibus purus in massa tempor nec. Eget dolor morbi non arcu risus quis. Non arcu risus quis varius.",
            "person":
              {
                "imageName":"JamesM.jpeg",
                "name": "James",
                "location": "Banbury"
              }
            },
            {
              "title":"Egestas tellus rutrum tellus pellentesque.",
              "body":"Urna duis convallis convallis tellus id interdum velit. Donec pretium vulputate sapien nec. Egestas tellus rutrum tellus pellentesque. Ut aliquam purus sit amet luctus venenatis.",
              "person":
                {
                  "imageName":"EmilyS.jpeg",
                  "name": "Emily",
                  "location": "Liverpool"
                }
              }
        ];

        res.locals.testimonialsSlide1 = testimonialsSlide1;
        res.locals.testimonialsSlide2 = testimonialsSlide2;


    // Template variables for the 'Featured Images' section

    const featuredImages = [ "pexels-roman-davayposmotrim-35987.jpg",
                       "pexels-tembela-bohle-2803158.jpg",
                       "pexels-cliff-booth-4056724.jpg",
                       "pexels-grzegorz-5209197.jpg"
                     ];

    res.locals.featuredImages =  featuredImages;

    // Template variables for the 'Footer' section
    const today = new Date();
    const year = today.getFullYear();
    res.locals.copyrightYr = year;

    res.render("home");

};
