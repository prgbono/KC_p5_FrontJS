import BaseController from './BaseController.js';
import { modalDeleteConfirmationView } from './../views/modalDeleteConfirmation.js'

export default class ModalDeleteConfirmationController extends BaseController{
  
  //TODO: Pasar nombre artículo al modal constructor(element, itemName){
  constructor(element){
    super(element)
    this.subscribe(this.events.REMOVE_ITEM, (item) => {
      this.showModal(item);
    })
  }

  showModal(item){
    this.me.innerHTML = modalDeleteConfirmationView(item.name);
    this.me.classList.add('is-active')
  }
  
}