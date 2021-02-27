import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import NewItemFormController from './controllers/NewItemFormController.js'

window.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const newItemForm = document.querySelector('form');
  const newItemFormController = new NewItemFormController(newItemForm);
});