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
const callToActionScript = require("./routes/dotcom-secrets-scripts/call-to-action-script");
const leadCapture = require("./routes/dotcom-secrets-scripts/lead-capture");
const liveEventInvitation = require("./routes/dotcom-secrets-scripts/live-event-invitation");
const magicBullet = require("./routes/dotcom-secrets-scripts/magic-bullet");
const orderBump = require("./routes/dotcom-secrets-scripts/order-bump");
const originStory = require("./routes/dotcom-secrets-scripts/origin-story");
const otoNeedHelpDoneForYou = require("./routes/dotcom-secrets-scripts/oto-need-help-done-for-you");
const otoNextThing = require("./routes/dotcom-secrets-scripts/oto-next-thing");
const pptOptInVideo = require("./routes/dotcom-secrets-scripts/ppt-opt-in-video");
const promoteYourWebinar = require("./routes/dotcom-secrets-scripts/promote-your-webinar");
const salesOpenerQuestions = require("./routes/dotcom-secrets-scripts/sales-opener-questions");
const specialOffer = require("./routes/dotcom-secrets-scripts/special-offer");
const starStorySolution = require("./routes/dotcom-secrets-scripts/star-story-solution");
const webinarOptIn = require("./routes/dotcom-secrets-scripts/webinar-opt-in");
const whoWhatWhyHow = require("./routes/dotcom-secrets-scripts/who-what-why-how");

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
