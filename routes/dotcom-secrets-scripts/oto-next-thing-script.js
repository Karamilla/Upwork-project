const express = require("express");
const router = express.Router();
const parent = "dotcom-secrets-scripts";
const template = "oto-next-thing-script";

const requestHandler = require("../../utils/requestHandlerIdea"); // if you use this router, please rename it

/**
 * Advertising-scripts/curiosity-ad-copy-scripts fields
 * @param {Request} req - http request
 * @param {Response} res - http response
 */
router.get(`/${parent}/${template}`, (req, res) => {
  const action = req.query.action;
  res.json(requestHandler.getAction(parent, template, action));
});

/**
 * Advertising-scripts/curiosity-ad-copy-scripts renderd html
 * @param {Request} req - http request
 * @param {Response} res - http response
 */
router.post(`/${parent}/${template}`, (req, res) => {
  const action = req.query.action;
  const data = req.body.data;

  res.json(requestHandler.postAction(parent, template, action, data));
});

module.exports = router;
