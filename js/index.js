import ItemsController from './controllers/ItemsListController.js';
import SpinnerController from './controllers/SpinnerController.js';

// TODO: Pasar los nombres de los eventos a variables globales

window.addEventListener('DOMContentLoaded', async (event) => {
  const spinner = document.querySelector('.lds-ring');
  const spinnerController = new SpinnerController(spinner);

  const element = document.querySelector('.items-list');
  const itemsController = new ItemsController(element);
  itemsController.loadItems();
})    