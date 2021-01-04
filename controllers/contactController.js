const { check } = require('express-validator/check');
const { validationResult } = require('express-validator/check');
exports.personalTraining = function(req, res) {
   //Make API calls to Strapi to get the content and then render it into the template
   //Title
   res.locals.title = "Contact | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "hiit-rifitness.jpeg"

   const errors =[];
   res.locals.errors=errors;

   //Banner Heading
   const l2BannerHeading1 = "Contact";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "contact-pt";
   const validFlag = 2;
   res.locals.validFlag = 2;

   //Content
   res.locals.formTitle="Complimentary Initial Consultation";
   res.locals.formSbtBtnTxt="Send Enquiry";

   res.locals.nxtStp1IconName = "fa-envelope";
   res.locals.nxtStp2IconName = "fa-calendar-alt";
   res.locals.nxtStp3IconName = "fa-user-check";
   res.locals.nxtStp1Txt = "eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet";
   res.locals.nxtStp2Txt = "eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper";
   res.locals.nxtStp3Txt = "eget lorem dolor sed viverra ipsum nunc aliquet";

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");
};

exports.corporate = function(req, res) {
  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Corporate Workshops| RiFitness";
   //Banner image
   res.locals.l2BannerImg = "pexels-victor-freitas-841130.jpg"

   //Banner Heading
   const l2BannerHeading1 = "Corporate Workshops";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "corporate";

   //Content
   res.locals.contMainHeading="Watch this space!";

   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");

};

exports.careers = function(req, res) {

};







exports.formProcessor = function(req, res) {

  //Make API calls to Strapi to get the content and then render it into the template
  //Title
   res.locals.title = "Contact | RiFitness";
   //Banner image
   res.locals.l2BannerImg = "hiit-rifitness.jpeg"

   //Banner Heading
   const l2BannerHeading1 = "Contact";
   res.locals.l2BannerHeading1 = l2BannerHeading1;

   res.locals.pageType = "contact-pt";

   //Content
   res.locals.formTitle="Complimentary Initial Consultation";
   res.locals.formSbtBtnTxt="Send Enquiry";

   res.locals.nxtStp1IconName = "fa-envelope";
   res.locals.nxtStp2IconName = "fa-calendar-alt";
   res.locals.nxtStp3IconName = "fa-user-check";
   res.locals.nxtStp1Txt = "eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet";
   res.locals.nxtStp2Txt = "eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper";
   res.locals.nxtStp3Txt = "eget lorem dolor sed viverra ipsum nunc aliquet";


   // Template variables for the 'Footer' section
   const today = new Date();
   const year = today.getFullYear();
   res.locals.copyrightYr = year;
   res.render("subjectPage");



  //Process contact form data
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let frmValdStat = false;
     //res.status(422).json({ errors: errors.array() });
     //return;
     console.log(errors.array());
     var validFlag= 0;
     res.locals.validFlag =validFlag;
     res.locals.errors = errors.array();
     res.render("subjectPage" )
   }
   else{
     let frmValdTxt = "Your enquiry has been submitted. We will be in contact in the next 2 days.";
     var validFlag= 1;
     res.locals.validFlag= validFlag;
     res.locals.frmValdTxt=frmValdTxt;
     res.render("subjectPage");
   }

};


exports.validate = (method) => {
  console.log("Inside the validate function:" + method);
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
