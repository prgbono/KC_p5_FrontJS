import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import ItemDetailController from './controllers/ItemDetailController.js'
// import WarnModalController from './controllers/WarnModalController.js';

window.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const itemDetail = document.querySelector('form');
  const itemDetailController = new ItemDetailController(itemDetail);

  // TODO: Warn the user when entering in item-detail in case is not logged in
  // const warnModal = document.querySelector('.modal');
  // const warnModalController = new WarnModalController(warnModal);
});