import BaseController from './BaseController.js';
import { modalDeleteConfirmationView } from './../views/modalDeleteConfirmation.js'
import itemsService from '../services/ItemsService.js';

export default class ModalDeleteConfirmationController extends BaseController{
  
  //TODO: Pasar nombre artículo al modal constructor(element, itemName){
  constructor(element){
    super(element)
    this.subscribe(this.events.REMOVE_ITEM, (item) => {
      this.showModal(item);
      this.addListeners(item);
    })
  }

  showModal(item){
    this.me.innerHTML = modalDeleteConfirmationView(item.name);
    this.me.classList.add('is-active');
  }

  closeModal(){
    this.me.classList.remove('is-active');
  }

  addListeners(item){
    this.me.querySelector('.is-danger').addEventListener('click', event =>{
      this.deleteItem(item);
    });
    this.me.querySelector('#cancel-button').addEventListener('click', event =>{
      console.log('MODAL, CANCEL BTN');
      this.closeModal();
    });
    //TODO: Add listener for letting the user dismiss clicking everywhere but OK, even top right X button!
  }

  async deleteItem(item){
    this.publish(this.events.START_LOADING, {});
    try {
      await itemsService.deleteItem(item);
      window.location.href = '/';
      //TODO: Notice the user
    } 
    catch (error) {
      this.publish(this.events.ERROR, error);
    } 
    finally{
      this.closeModal();
      this.publish(this.events.FINISH_LOADING, {})
    }
    
  }
}