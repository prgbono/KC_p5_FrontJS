import BaseController from './BaseController.js';
import { errorView } from './../views/errorView.js'

export default class ErrorController extends BaseController {
  
  constructor (element){
    super(element);

    this.subscribe(this.events.ERROR, (err) => {
      this.showError(err);
    });
  }

  showError(error){    
    this.me.innerHTML = errorView(error);
    this.me.classList.remove('hidden');
    this.me.addEventListener(this.events.CLICK, (event) => {
      // Remove Error pop up if click out or if click on 'X'
      if (event.target == this.me || event.target.classList.contains('delete')) {
        this.me.classList.add('hidden');
      }
    })
  }
}
