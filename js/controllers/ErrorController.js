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
    // TODO: Gestión del clicl una vez mostrado el error
  }
}
