/**
 * Get handler
 * @param parentId string
 * @param templateId string
 * @param action string
 */

function getAction(parentId, templateId, action) {
  const fields = require(`../templates/${parentId}/${templateId}/fields.json`);

  // NOTE I AM USING A SWITCH TO BE ABLE TO EASILY ADD ADDITIONAL ACTIONS IN THE FUTURE
  // GET actions
  switch (action) {
    case "fields":
      return fields;
    default:
      return {
        error: true,
        message: "Invalid action recieved for: " + templateId,
      };
  }
}

exports.getAction = getAction;

/**
 * Post handler
 * @param parentId string
 * @param templateId string
 * @param action string
 * @param data object
 */
function postAction(parentId, templateId, action, data) {
  // POST actions
  switch (action) {
    case "render":
      const html = render(templateId, data); // or const html = render(`${parentId}/${templateId}`, data);
      return { fields: data, template: html };
    default:
      return {
        error: true,
        message: "Invalid POST action recieved for: " + templateId,
      };
  }
}

exports.postAction = postAction;
