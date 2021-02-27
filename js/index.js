import ItemsController from './controllers/ItemsListController.js';
import SpinnerController from './controllers/SpinnerController.js';
import ErrorController from './controllers/ErrorController.js';
import NoItemsController from './controllers/NoItemsController.js';

// TODO: Pasar los nombres de los eventos a variables globales

window.addEventListener('DOMContentLoaded', async (event) => {
  const spinner = document.querySelector('.spinner-loader');
  const spinnerController = new SpinnerController(spinner);

  const element = document.querySelector('.items-list');
  const itemsController = new ItemsController(element);
  itemsController.loadItems();

  const errorElement = document.querySelector('.global-errors');
  const errorController = new ErrorController(errorElement);

  const noItemsElement = document.querySelector('.no-items');
  const noItemsController = new NoItemsController(noItemsElement);
})    