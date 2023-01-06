const input = document.getElementById('input');
const unit = document.getElementById('unit');
const output = document.getElementById('output');
const convert = document.getElementById('convert');
const clear = document.getElementById('clear');

convert.addEventListener('click', () => {
  if (unit.value === 'celsius') {
    output.innerHTML = `${((input.value * 9) / 5 + 32).toFixed(2)} <span>(°F)</span>`;
  } else if (unit.value === 'fahrenheit') {
    output.innerHTML = `${(((input.value - 32) * 5) / 9).toFixed(2)} <span>°C</span> `;
  } else if (unit.value === 'kelvin') {
    output.innerHTML = `${(input.value - 273.15).toFixed(2)} <span>°C</span>`;
  }
});

clear.addEventListener('click', () => {
  input.value = '';
  output.innerHTML = '';
});
