const config = require('./config');
const msgLog = document.querySelector('.msg-log');

function printMessage(msg, msgConfig) {
  const mod = { ...config, ...msgConfig };
  const msgElement = document.createElement(mod.msgElement);

  msgElement.setAttribute('style', `color: ${mod.textColor}; background: ${mod.textBackground}; font-size: ${mod.fontSize}; font-weight: ${mod.fontWeight}`);
  msgElement.textContent = msg;
  msgLog.append(msgElement);

  if (mod.lineBreakCount) printBreak(mod.lineBreakCount, mod.lineBreakHeight);
}

function printMulti(...msgs) { // returns another function
  return function(msgConfig = {} ) {
    if (Array.isArray(msgs[0])) msgs = msgs[0];
    if (msgConfig.breakAfterEach || msgConfig.lineBreakCount === 0) {
      msgs.forEach((msg) => printMessage(msg, msgConfig));
      return;
    }
    const mod = { ...msgConfig, lineBreakCount: 0};

    for (let i = 0; i < msgs.length; i++) {
      printMessage(msgs[i], i == msgs.length - 1 ? msgConfig : mod);
    }
  }
}

function printBreak(count = config.lineBreakCount, height = config.lineBreakHeight) {
  for (let i = 0; i < count; i++) {
    const breakElement = document.createElement('div');
    breakElement.setAttribute('style', `height: ${height}`);
    msgLog.append(breakElement);
  }
}

function clearMsgs() {
  while(msgLog.firstChild) {
    msgLog.removeChild(msgLog.firstChild);
  }
}

module.exports = {
  printMessage,
  printMulti,
  printBreak,
  clearMsgs,
};