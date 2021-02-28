import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import RegisterFormController from './controllers/RegisterFormController.js';

window.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const registerForm = document.querySelector('form');
  const registerFormController = new RegisterFormController(registerForm);
});