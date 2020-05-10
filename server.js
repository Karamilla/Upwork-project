const express = require("express");
const app = express();

// THE ROUTES
// ==============
// AdverTising Scripts
// =========================
const advertisingScripts = require("./routes/advertising-scripts");
// ============================================================================================
// bulletScripts
// ================
const bulletScripts = require("./routes/bullet-scripts");
// ===========================================================================================================
// caseStudiesTestimonialsScripts
// ==================================
const caseStudyScript = require("./routes/case-studies-testimonials-scripts");
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
const otoNeedHelpDoneForYouScript = require("./routes/dotcom-secrets-scripts/oto-next-thing-script");
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
const abandonedCartEmailScripts = require("./routes/email-scripts/abandoned-cart-email-scripts ");
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
const opportunitySwitchHeadlineTitleScript = require("./routes/expert-secrets/opportunity-switch-headline-title-script");
const shortEpiphanyBridgeScript = require("./routes/expert-secrets/short-epiphany-bridge-script");
const theBigDomino = require("./routes/expert-secrets/the-big-domino");
const whoWhatStatementScript = require("./routes/expert-secrets/who-what-statement-script");
// =============================================================================================
// megaScripts
// ==============
const easySurveyScript = require("./routes/mega-scripts/easy-survey-script");
const masterClassWizard = require("./routes/mega-scripts/master-class-wizard");
const perfectWebinarWizard20 = require("./routes/mega-scripts/perfect-webinar-wizard-2.0");
const starStorySolutionScript = require("./routes/mega-scripts/star-story-solution-script");
// ====================================================================================================
// oneFunnelAwayScripts
// ==========================
const epiphanyBridgeScript2 = require("./routes/one-funnel-away-scripts/epiphany-bridge-script");
const hookStoryOfferScript = require("./routes/one-funnel-away-scripts/hook-story-offer-script");
const killerHeadlineScripts = require("./routes/one-funnel-away-scripts/killer-headline-scripts");
const nicheAndOfferDetectiveWizard = require("./routes/one-funnel-away-scripts/niche-and-offer-detective-wizard");
const offerStackScript = require("./routes/one-funnel-away-scripts/offer-stack-script");
const optInHookStoryScript = require("./routes/one-funnel-away-scripts/opt-in-hook-story-script");
const otoNeedHelpDoneForYouScript2 = require("./routes/one-funnel-away-scripts/oto-need-help-done-for-you-script");
const otoNextThing2 = require("./routes/one-funnel-away-scripts/oto-next-thing");
const questionHooksScript = require("./routes/one-funnel-away-scripts/question-hooks-script");
// ===================================================================================================
// salesCopyVideoScripts
// ==========================

const amazonEcommerce2 = require("./routes/sales-copy-video-scripts/amazon-ecommerce-script");
const callToActionScript2 = require("./routes/sales-copy-video-scripts/call-to-action-script");
const leadCaptureScript = require("./routes/sales-copy-video-scripts/lead-capture-script");
const liveEventInvitationScript2 = require("./routes/sales-copy-video-scripts/live-event-invitation-script");
const magicBulletScript = require("./routes/sales-copy-video-scripts/magic-bullet-script");
const orderBumpScript = require("./routes/sales-copy-video-scripts/order-bump-script");
const originStoryScript = require("./routes/sales-copy-video-scripts/origin-story-script");
const otoNextThingScript = require("./routes/sales-copy-video-scripts/oto-next-thing-script");
const otoNeedHelpDoneForYouScript3 = require("./routes/sales-copy-video-scripts/oto-need-help-done-for-you-script");
const pptOptInVideoScript = require("./routes/sales-copy-video-scripts/ppt-opt-in-video-script");
const promoteYourWebinarScripts = require("./routes/sales-copy-video-scripts/promote-your-webinar-script");
const salesOpenerQuestionsScript = require("./routes/sales-copy-video-scripts/sales-opener-questions-script");
const specialOfferScript = require("./routes/sales-copy-video-scripts/special-offer-script");
const webinarOptInScript = require("./routes/sales-copy-video-scripts/webinar-opt-in-script");
const whoWhatWhyHowScript = require("./routes/sales-copy-video-scripts/who-what-why-how-script");

// ===================================================================================
// SalesLettersScripts
// ===================

const longFormSalesLetter = require("./routes/sales-letter-scripts/long-form-sales-letter-scripts");
const pptVideoSalesLetter = require("./routes/sales-letter-scripts/ppt-video-sales-letter-scripts");
const shortSalesLetterScripts = require("./routes/sales-letter-scripts/short-sales-letter-scripts");
// ======================================================================================================
// tittleHeadLines
// ================

const dirtyLittleSecretsScript = require("./routes/title-headlines-subject-lines/dirty-little-secrets-script");
const emailSubjectLineScripts2 = require("./routes/title-headlines-subject-lines/email-subject-line-scripts");
const killerHeadlineScripts2 = require("./routes/title-headlines-subject-lines/killer-headline-scripts");
const millionDollarContentHeadlineScripts = require("./routes/title-headlines-subject-lines/million-dollar-content-headline-scripts");
const millionDollarSalesHeadlineScripts = require("./routes/title-headlines-subject-lines/million-dollar-sales-headline-scripts");
const profitableTitleScripts = require("./routes/title-headlines-subject-lines/profitable-title-scripts");
const shortHeadlineScripts = require("./routes/title-headlines-subject-lines/short-headline-scripts");
const timelessClassicHeadlineScripts = require("./routes/title-headlines-subject-lines/timeless-classic-headline-scripts");
// =================================

app.use(express.json());

app.set("views", "templates");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

// =======================================================
// Setting Routes
// AdverTising Scripts
// =========================

app.use("/", advertisingScripts);
// app.use("/", facebookNewsfeedAdScripts);
// app.use("/", ppcAdScripts);
// app.use("/", stealthCloseScripts);
// ============================================================================================
// bulletScripts
// ================
app.use("/", bulletScripts);
// app.use("/", featureBenefitMeaningFbmBulletScript);

// ===========================================================================================================
// caseStudiesTestimonialsScripts
// ==================================
app.use("/", caseStudyScript);

// ===================================================================================================================================
// ContentCreationScripts
// ===========================

app.use("/", decisionTreeScript);
app.use("/", millionDollarTestimonialScript);
app.use("/", freeReportScript);
app.use("/", seinfeldEmailTopicIdeaScript);
app.use("/", storyIdeaScript);
app.use("/", theDemoScript);

// =============================================================================================
// dotcomSecretsScripts
// ==========================
app.use("/", amazonEcommerce);
app.use("/", callToActionScript);
app.use("/", leadCapture);
app.use("/", liveEventInvitation);
app.use("/", magicBullet);
app.use("/", orderBump);
app.use("/", originStory);
app.use("/", otoNeedHelpDoneForYou);
app.use("/", otoNeedHelpDoneForYouScript);
app.use("/", pptOptInVideo);
app.use("/", promoteYourWebinar);
app.use("/", salesOpenerQuestions);
app.use("/", specialOffer);
app.use("/", starStorySolution);
app.use("/", webinarOptIn);
app.use("/", whoWhatWhyHow);

// =============================================================================================
// EmailScripts
// ======================

app.use("/", abandonedCartEmailScripts);
app.use("/", emailSubjectLineScripts);
app.use("/", autoEmailFollowUpScripts);
app.use("/", fastTeaserAndTweetScripts);
app.use("/", freeInfoRequestEmailSequence);
app.use("/", liveEventInvitationScript);
app.use("/", onboardingEmailSequence);
app.use("/", promoteYourWebinarScript);
app.use("/", seinfeldEmailTopicIdeaScript2);
app.use("/", testimonialRequestEmailScripts);
app.use("/", webinarFollowUpScripts);

// ==============================================================================================================
// ExpertScripts
// =================

app.use("/", CuriosityHooksScript5);
app.use("/", MinutePerfectWebinarWizard5);
app.use("/", askCampaignScript);
app.use("/", epiphanyBridgeScript);
app.use("/", opportunitySwitchHeadlineTitleScript);
app.use("/", shortEpiphanyBridgeScript);
app.use("/", theBigDomino);
app.use("/", whoWhatStatementScript);

// =============================================================================================
// megaScripts
// ==============

app.use("/", easySurveyScript);
app.use("/", masterClassWizard);
app.use("/", perfectWebinarWizard20);
app.use("/", starStorySolutionScript);

// ====================================================================================================
// oneFunnelAwayScripts
// ==========================

app.use("/", epiphanyBridgeScript2);
app.use("/", hookStoryOfferScript);
app.use("/", killerHeadlineScripts);
app.use("/", nicheAndOfferDetectiveWizard);
app.use("/", offerStackScript);
app.use("/", optInHookStoryScript);
app.use("/", otoNeedHelpDoneForYouScript2);
app.use("/", otoNextThing2);
app.use("/", questionHooksScript);

// ===================================================================================================
// salesCopyVideoScripts
// ==========================

app.use("/", amazonEcommerce2);
app.use("/", callToActionScript2);
app.use("/", leadCaptureScript);
app.use("/", liveEventInvitationScript2);
app.use("/", magicBulletScript);
app.use("/", orderBumpScript);
app.use("/", originStoryScript);
app.use("/", otoNextThingScript);
app.use("/", otoNeedHelpDoneForYouScript3);
app.use("/", pptOptInVideoScript);
app.use("/", promoteYourWebinarScripts);
app.use("/", salesOpenerQuestionsScript);
app.use("/", specialOfferScript);
app.use("/", webinarOptInScript);
app.use("/", whoWhatWhyHowScript);

// ===================================================================================
// SalesLettersScripts
// ===================
app.use("/", longFormSalesLetter);
app.use("/", pptVideoSalesLetter);
app.use("/", shortSalesLetterScripts);
// ======================================================================================================
// tittleHeadLines
// ================
app.use("/", dirtyLittleSecretsScript);
app.use("/", emailSubjectLineScripts2);
app.use("/", killerHeadlineScripts2);
app.use("/", millionDollarContentHeadlineScripts);
app.use("/", millionDollarSalesHeadlineScripts);
app.use("/", profitableTitleScripts);
app.use("/", shortHeadlineScripts);
app.use("/", timelessClassicHeadlineScripts);

// ================================================
// Port3000 Listening

const port = process.env.PORT || 3000;
app.listen(port);
