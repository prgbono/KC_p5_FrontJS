import BaseController from './BaseController.js';
import itemsService from './../services/ItemsService.js';
import { itemView } from './../views/itemView.js';
export default class ItemsListController extends BaseController{
  
  constructor(element){
    super(element);

    //TODO: subscribe SEARCH
    //TODO: subscribe ITEM_DELETED
  }

  render(items) {
    this.me.innerHTML = '';
    for (const item of items) {
      const itemElement = document.createElement('section');
      itemElement.classList.add('column', 'is-one-third')
      itemElement.innerHTML = itemView(item);
      itemElement.querySelector('.card').addEventListener('click', (event) =>{
          event.stopPropagation();
          console.log('click en ITEM, e.target', event.target);
        })
      // TODO: canBeDeleted staff
      this.me.appendChild(itemElement);
    }
  }

  async loadItems(){
    this.publish(this.events.START_LOADING, {});
    try {
      const items = await itemsService.getItems();
      !!items.length 
        ? this.render(items)
        : this.publish(this.events.THERE_IS_NO_ITEMS, {})
    } 
    catch (error) {
      this.publish(this.events.ERROR, error);
    } 
    finally{
      this.publish(this.events.FINISH_LOADING, {})
    }
  }
}