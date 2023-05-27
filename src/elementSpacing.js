const msgLog = document.querySelector('.msg-log');
const msgInput = document.querySelector('.msg-input');

window.addEventListener('resize', resizeLog);
window.addEventListener('load', resizeLog);

function resizeLog() {
  msgLog.setAttribute('style', `margin-bottom: ${msgInput.offsetHeight + 4}px;`) ;
}