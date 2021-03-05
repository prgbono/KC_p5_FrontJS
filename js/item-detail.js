import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import ItemDetailController from './controllers/ItemDetailController.js'
import NoItemsController from './controllers/NoItemsController.js'
import ModalDeleteConfirmationController from './controllers/ModalDeleteConfirmationController.js'
// import WarnModalController from './controllers/WarnModalController.js';

window.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const itemDetail = document.querySelector('form');
  const itemDetailController = new ItemDetailController(itemDetail);

  const noItemsElement = document.querySelector('.no-items');
  const noItemsController = new NoItemsController(noItemsElement);

  const modalDeleteConfirmation = document.querySelector('.modal');
  const modalDeleteConfirmationController = new ModalDeleteConfirmationController(modalDeleteConfirmation);

  // TODO: Warn the user when entering in item-detail in case is not logged in
  // const warnModal = document.querySelector('.modal');
  // const warnModalController = new WarnModalController(warnModal);
});

