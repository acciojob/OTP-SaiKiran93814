//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const value = input.value;
    if (value) {
      // Move to next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      } else {
        input.value = '';
      }
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
    pasteData.split('').forEach((char, i) => {
      if (i < inputs.length) {
        inputs[i].value = char;
      }
    });
    if (pasteData.length >= inputs.length) {
      inputs[inputs.length - 1].focus();
    } else {
      inputs[pasteData.length].focus();
    }
  });
});
