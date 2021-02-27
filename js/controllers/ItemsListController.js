import BaseController from './BaseController.js';
import itemsService from './../services/ItemsService.js';
import { itemView } from './../views/itemView.js';
export default class ItemsListController extends BaseController{
  
  constructor(element){
    super(element);
    
  }

  render(items) {
    this.me.innerHTML = '';
    for (const item of items) {
      const itemElement = document.createElement('section');
      itemElement.classList.add('column', 'is-one-third')
      itemElement.innerHTML = itemView(item);
      // TODO: canBeDeleted staff
      this.me.appendChild(itemElement);
    }
  }

  async loadItems(){
    this.publish(this.events.START_LOADING, {});
    try {
      const items = await itemsService.getItems();
      this.render(items);
    } 
    catch (error) {
      this.publish(this.events.ERROR, error);
    } 
    finally{
      this.publish(this.events.FINISH_LOADING, {})
    }
  }
}