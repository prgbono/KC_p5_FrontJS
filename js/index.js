import ItemsController from './controllers/ItemsListController.js'

// TODO: 
  // -Pasar los nombres de los eventos a variables globales
  // - async antes del (event)

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOMContentLoaded');
  
  const element = document.querySelector('.items-list');
  const itemsController = new ItemsController(element);
  itemsController.loadItems();
  console.log('index.js');
  

})