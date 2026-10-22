const input = document.querySelector('#temperature');
const button = document.querySelector('#checkButton');
const result = document.querySelector('#result');

button.addEventListener('click', function () {
  const temperature = Number(input.value);

  if (input.value.trim() === '' || Number.isNaN(temperature)) {
    result.textContent = 'Please enter a valid temperature in Fahrenheit.';
    result.classList.add('error');
    return;
  }

  result.classList.remove('error');

  if (temperature < 32) {
    result.textContent = 'Wear a coat or heavy jacket.';
  } else if (temperature < 50) {
    result.textContent = 'Wear a light jacket or sweater.';
  } else if (temperature < 60) {
    result.textContent = 'Wear a light jacket or sweater.';
  } else if (temperature < 85) {
    result.textContent = 'Wear a T-shirt or light clothing.';
  } else {
    result.textContent = 'Wear lightweight clothing and remember to stay hydrated.';
  }
});
