const { input } = require("../Topics");
const msgInput = document.querySelector('.msg-input');

msgInput.addEventListener('keyup', (e) => {
  if (!(e.keyCode === 13)) return;
  const fieldInput = msgInput.value;
  msgInput.value = '';

  input(fieldInput);
});