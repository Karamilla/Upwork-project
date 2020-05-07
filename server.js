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
const amazonEcommerce = require("./routes/dotcom-secrets-scripts/amazon-ecommerce-script");
const callToActionScript = require("./routes/dotcom-secrets-scripts/call-to-action-script");
const leadCapture = require("./routes/dotcom-secrets-scripts/lead-capture-script");
const liveEventInvitation = require("./routes/dotcom-secrets-scripts/live-event-invitation-script");
const magicBullet = require("./routes/dotcom-secrets-scripts/magic-bullet-script");
const orderBump = require("./routes/dotcom-secrets-scripts/order-bump-script");
const originStory = require("./routes/dotcom-secrets-scripts/origin-story-script");
const otoNeedHelpDoneForYou = require("./routes/dotcom-secrets-scripts/oto-need-help-done-for-you-script");
const otoNextThing = require("./routes/dotcom-secrets-scripts/oto-next-thing-script");
const pptOptInVideo = require("./routes/dotcom-secrets-scripts/ppt-opt-in-video");
const promoteYourWebinar = require("./routes/dotcom-secrets-scripts/promote-your-webinar-script");
const salesOpenerQuestions = require("./routes/dotcom-secrets-scripts/sales-opener-questions-scripts");
const specialOffer = require("./routes/dotcom-secrets-scripts/special-offer-scripts");
const starStorySolution = require("./routes/dotcom-secrets-scripts/star-story-solution-script");
const webinarOptIn = require("./routes/dotcom-secrets-scripts/webinar-opt-in-script");
const whoWhatWhyHow = require("./routes/dotcom-secrets-scripts/who-what-why-how-script");
// =============================================================================================

// EmailScripts
// ======================
const abandonedCartEmailScripts = require("./routes/email-scripts/abandoned-cart-email-scripts");
const emailSubjectLineScripts = require("./routes/email-scripts/email-subject-line-scripts");
const autoEmailFollowUpScripts = require("./routes/email-scripts/auto-email-follow-up-scripts");
const fastTeaserAndTweetScripts = require("./routes/email-scripts/fast-teaser-and-tweet-scripts");
const freeInfoRequestEmailSequence = require("./routes/email-scripts/free-info-request-email-sequence");
const liveEventInvitationScript = require("./routes/email-scripts/live-event-invitation-script");
const onboardingEmailSequence = require("./routes/email-scripts/onboarding-email-sequence");
const promoteYourWebinarScript = require("./routes/email-scripts/promote-your-webinar-script");
const seinfeldEmailTopicIdeaScript2 = require("./routes/email-scripts/seinfeld-email-topic-idea-script");
const testimonialRequestEmailScripts = require("./routes/email-scripts/testimonial-request-email-scripts");
const webinarFollowUpScripts = require("./routes/email-scripts/webinar-follow-up-scripts");
// ==============================================================================================================
// ExpertScripts
// =================
const CuriosityHooksScript5 = require("./routes/expert-secrets/5-curiosity-hooks-script");
const MinutePerfectWebinarWizard5 = require("./routes/expert-secrets/5-minute-perfect-webinar-wizard");
const askCampaignScript = require("./routes/expert-secrets/ask-campaign-script");
const epiphanyBridgeScript = require("./routes/expert-secrets/epiphany-bridge-script");
const opportunitySwitchHeadlineTitleScript = require("./routes/expert-secrets/opportunitySwitchHeadlineTitleScript");
const shortEpiphanyBridgeScript = require("./routes/expert-secrets/short-epiphany-bridge-script");
const theBigDomino = require("./routes/expert-secrets/the-big-domino");
const whoWhatStatementScript = require("./routes/expert-secrets/whoWhatStatementScript");
// =============================================================================================
// megaScripts
// ==============
const easySurveyScript = require("./routes/expert-secrets/easy-survey-script");

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
