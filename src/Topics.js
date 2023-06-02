const publisher = require('simply-pub-sub');
const publishers = {};

function addPublisher(name, mainFnc) {
  publishers[name] = publisher(mainFnc);
}

module.exports = {
  publishers,
  addPublisher,
  get input() { return this.publishers.input },
  get messenger() { return this.publishers.messenger},
};