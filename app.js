const form = document.querySelector('.form-field');

form.addEventListener('submit', calculate);

function calculate(e) {
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const bmi = document.getElementById('bmi');
  const status = document.getElementById('bmi-status');

  const weightInput = parseFloat(weight.value);
  const heightInput = parseFloat(height.value);

  const bodyMassIndex = parseFloat(weightInput / (heightInput * heightInput)).toFixed(1);

  bmi.value = bodyMassIndex;

  if (isFinite(weightInput) && isFinite(heightInput)) {
    if (bodyMassIndex < 18.5) {
      status.value = 'Underweight';
    } else if (bodyMassIndex > 18.5 && bodyMassIndex <= 24.9) {
      status.value = 'Normal weight';
    } else if (bodyMassIndex > 24.9 && bodyMassIndex <= 29.9) {
      status.value = 'Overweight';
    } else {
      status.value = 'Obese';
    }
  } else {
    showError('Please enter a valid number');
  }
  e.preventDefault();
};

//Show error div
function showError(err) {
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.container');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'danger-alert';

  errorDiv.appendChild(document.createTextNode(err));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}

//Clear error
function clearError() {
  document.querySelector('.danger-alert').remove();
}

