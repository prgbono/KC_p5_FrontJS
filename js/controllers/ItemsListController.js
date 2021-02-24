import itemsService from './../services/ItemsService.js';
import { itemView } from './../views/itemView.js';
import BaseController from './BaseController.js';

export default class ItemsListController extends BaseController{

  render(items) {
    this.element.innerHTML = '';
    
    for (const item of items) {
      const article = document.createElement('article');
      // console.log('itemView(item): ', itemView(item));
      // article.innerHTML = '<div>THIS IS Ana rtivle</div>'

      // NO HACe BIEN ESTO!!!
      article.innerHTML = itemView(item);
      
      // TODO: canBeDeleted staff
      
      this.element.appendChild(article);
    }
  }

  async loadItems(){
    //TODO: publish
    try {
      const items = await itemsService.getItems();
      this.render(items);
    } 
    catch (error) {
      console.error('Catch error: ', error);
      // TODO: publish error
    } 
    // finally{
    //   //TODO: publish 
    // }
  }
}