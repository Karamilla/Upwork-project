const express = require("express");
const app = express();

// THE ROUTES
// ==============
const curiosityAdCopyScripts = require("./routes/advertising-scripts/curiosity-ad-copy-scripts");
const facebookNewsfeedAdScripts = require("./routes/advertising-scripts/facebook-newsfeed-ad-scripts");
const ppcAdScripts = require("./routes/advertising-scripts/ppc-ad-scripts");
const stealthCloseScripts = require("./routes/advertising-scripts/stealth-close-scripts");
const brunsonBulletScripts = require("./routes/bullet-scripts/brunson-bullet-scripts");
const featureBenefitMeaningFbmBulletScript = require("./routes/bullet-scripts/feature-benefit-meaning-fbm-bullet-script");
const caseStudyScript = require("./routes/case-studies-testimonials-scripts/case-study-script");
const millionDollarTestimonialScript = require("./routes/case-studies-testimonials-scripts/million-dollar-testimonial-script");

app.use(express.json());

app.set("views", "templates");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/", curiosityAdCopyScripts);
app.use("/", facebookNewsfeedAdScripts);
app.use("/", ppcAdScripts);
app.use("/", stealthCloseScripts);
app.use("/", brunsonBulletScripts);
app.use("/", featureBenefitMeaningFbmBulletScript);
app.use("/", caseStudyScript);
app.use("/", millionDollarTestimonialScript);

app.listen(3000);
