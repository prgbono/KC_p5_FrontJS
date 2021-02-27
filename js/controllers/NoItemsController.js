import BaseController from './BaseController.js';
import { noItemsView } from './../views/noItemsView.js'

export default class NoItemsController extends BaseController {
  
  constructor (element){
    super(element);

    this.subscribe(this.events.THERE_IS_NO_ITEMS, () => {
      this.render();
    });
  }

  render(){
    this.me.classList.remove('hidden');
    this.me.innerHTML = noItemsView();
  }
}
