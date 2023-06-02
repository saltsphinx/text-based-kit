const { Game, parser } = require('text-based-game-engine');
const Topics = require('./Topics');

function inputHandler(input) {
  const { command, words } = parser(input);
  if (Game.callCommand(command, words) === false) Topics.messenger('Message not understood.', { textColor: 'white' });
}

module.exports = inputHandler;