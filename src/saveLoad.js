const { Game, Serialize } = require('text-based-game-engine');
const { saveData, loadData} = Serialize;

function save(key) {
  try {
    saveData(Game.data, key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function load(key) {
  try {
    loadData(key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = {
  save,
  load,
};