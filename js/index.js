import ItemsController from './controllers/ItemsListController.js'

// TODO: Pasar los nombres de los eventos a variables globales

window.addEventListener('DOMContentLoaded', async (event) => {
  const element = document.querySelector('.items-list');
  const itemsController = new ItemsController(element);
  itemsController.loadItems();
})    