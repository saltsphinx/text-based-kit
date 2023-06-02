const { addPublisher } = require('../Topics');
const { logInterface } = require('../UI/uiCore');
const inputHandler = require('../inputHandler');

addPublisher('messenger', messageHandler);
addPublisher('input', inputHandler);

function messageHandler(...msgs) {
  let config;
  if (typeof msgs[msgs.length - 1] == 'object') config = msgs.pop();

  logInterface.printMulti(...msgs)(config);
  return { msgs, config };
}