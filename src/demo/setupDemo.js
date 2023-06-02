const game = require("text-based-game-engine/src/game");
const demoScene = require("./demoScene");

game.scenes.demo = demoScene;
game.initializeScene('demo');