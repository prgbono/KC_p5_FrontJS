import ItemsService from '../services/ItemsService.js';
import { itemDetailView } from '../views/itemDetail.js';
import BaseController from './BaseController.js';

export default class DeleteButtonController extends BaseController{

  constructor(element, itemId){
    super(element);
    this.me.addEventListener(this.events.CLICK, async ev => {
      ev.preventDefault();
      this.deleteItem(itemId);
    })
  }

  async deleteItem(itemId) {
    await ItemsService.deleteItem(itemId);
  }

  
  
}