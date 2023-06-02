const { Scene } = require('text-based-game-engine');
const { data, commands, scenes } = require('text-based-game-engine/src/game');
const { messenger } = require('../Topics');
const { span, largeBold } = require('./configPresets');

const demoScene = Scene(initializer);
demoScene.data = demoData;

async function initializer() {
  if(data.demoVisited) {

    return;
  }

  messenger('Welcome the', span);
  messenger('  T', { ...span, ...largeBold, textColor: 'gold' });
  messenger('ext based kit\'s demo', { ...span, fontWeight: '800', fontSize: '1.4rem', textColor: 'gold' });
  messenger('project by saltshpinx', { textColor: 'white', lineBreakHeight: '1rem' });
  await createTimer(2000);
  
  messenger(
    'this is, what I hope to be, an easy to use javascript text-based game kit.',
    'there are a few important components I\'ll give a brief overview of, you can find out more by checking out indiviual components\' APIs on their github/npm pages.',
    'there will also be a short game afterwards for demostration purposes.',
    'this package is made up of 3 different components:',
    { lineBreakHeight: '0.9rem', breakAfterEach: false },
  );
  await createTimer(2000);

  messenger(
    '1. text-based-game-engine',
    '2. text-based-browser-ui',
    '3. simply-pub-sub',
  );
  await createTimer(2000);

  messenger("project ended, read README.md")
}

function createTimer(miliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, miliseconds);
  });
}

const demoData = {
  demoVisited: true,
}

demoScene.commands['l'] = () => { messenger('Goofy, goober!', { textColor: 'green', ...largeBold }) };

module.exports = demoScene;