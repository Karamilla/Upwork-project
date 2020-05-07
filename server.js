const express = require("express");
const app = express();

// THE ROUTES
// ==============
// AdverTising Scripts
// =========================
const curiosityAdCopyScripts = require("./routes/advertising-scripts/curiosity-ad-copy-scripts");
const facebookNewsfeedAdScripts = require("./routes/advertising-scripts/facebook-newsfeed-ad-scripts");
const ppcAdScripts = require("./routes/advertising-scripts/ppc-ad-scripts");
const stealthCloseScripts = require("./routes/advertising-scripts/stealth-close-scripts");
// ============================================================================================
// bulletScripts
// ================
const brunsonBulletScripts = require("./routes/bullet-scripts/brunson-bullet-scripts");
const featureBenefitMeaningFbmBulletScript = require("./routes/bullet-scripts/feature-benefit-meaning-fbm-bullet-script");
// ===========================================================================================================
// caseStudiesTestimonialsScripts
// ==================================
const caseStudyScript = require("./routes/case-studies-testimonials-scripts/case-study-script");
const millionDollarTestimonialScript = require("./routes/case-studies-testimonials-scripts/million-dollar-testimonial-script");
// ===================================================================================================================================
// ContentCreationScripts
// ===========================
const aboutMeScript = require("./routes/content-creation-scripts/about-me-script");
const decisionTreeScript = require("./routes/content-creation-scripts/decision-tree-script");
const freeReportScript = require("./routes/content-creation-scripts/free-report-script");
const seinfeldEmailTopicIdeaScript = require("./routes/content-creation-scripts/seinfeld-email-topic-idea-script");
const storyIdeaScript = require("./routes/content-creation-scripts/story-idea-script");
const theDemoScript = require("./routes/content-creation-scripts/the-demo-script");
// =============================================================================================
// dotcomSecretsScripts
// ==========================
const amazonEcommerce = require("./routes/dotcom-secrets-scripts/amazon-ecommerce");

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
app.use("/", aboutMeScript);
app.use("/", decisionTreeScript);
app.use("/", millionDollarTestimonialScript);
app.use("/", freeReportScript);
app.use("/", seinfeldEmailTopicIdeaScript);
app.use("/", storyIdeaScript);
app.use("/", theDemoScript);

app.listen(3000);
