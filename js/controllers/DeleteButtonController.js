import ItemsService from '../services/ItemsService.js';
import { itemDetailView } from '../views/itemDetail.js';
import BaseController from './BaseController.js';

export default class DeleteButtonController extends BaseController{

  constructor(element, item){
    super(element);
    this.me.addEventListener(this.events.CLICK, async ev => {
      ev.preventDefault();
      this.deleteItem(item);
    })
  }

  async deleteItem(item) {
    this.publish(this.events.REMOVE_ITEM, item);
    // await ItemsService.deleteItem(itemId);
  }
 
}