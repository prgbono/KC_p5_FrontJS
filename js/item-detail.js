import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import ItemDetailController from './controllers/ItemDetailController.js'

window.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const itemDetail = document.querySelector('body');
  const itemDetailController = new ItemDetailController(itemDetail);
});