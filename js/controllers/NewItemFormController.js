import BaseController from './BaseController.js';

export default class NewItemFormController extends BaseController {

  constructor(element) {
    super();
    console.log('NewItemFormController constructor. This.me, I must be a <form>: ', element);

    //TODO:  this.checkIfUserIsLogged();
    // this.attachEventListeners();
    //TODO:  this.focusInTextarea();
    
  }
}