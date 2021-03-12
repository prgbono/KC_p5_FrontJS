import BaseController from './BaseController.js';
import itemsService from '../services/ItemsService.js';
import { itemDetailView } from '../views/itemDetail.js';
import usersService from '../services/UsersService.js';
import DeleteButtonController from './../controllers/DeleteButtonController.js'

export default class ItemDetailController extends BaseController {
  
  constructor(element) {
    super(element);
    const itemId = window.location.search.replace('?', '').split('=')[1];
    this.loadItem(itemId);
  }

  async loadItem(itemId){
    this.publish(this.events.START_LOADING, {});
    try {
      // TODO: Warn the user when entering in item-detail in case is not logged in 
      // const isUserLogged = await this.checkIfUserIsLogged();
      // if (!isUserLogged) {
      //   this.me.classList.remove('hidden');
      // }
      // else{}

      const item = await itemsService.getItemById(itemId);
      this.render(item);
      this.attachEventListeners(item);
      this.focusInName();

      if (item.canBeDeleted){
        new DeleteButtonController(this.me.querySelector('.is-danger'), item);
      }
    } 
    catch (error) {
      if (error.message.indexOf('404') >= 0) {
        this.publish(this.events.THERE_IS_NO_ITEMS, error);
      }
      else{
        this.publish(this.events.ERROR, error);
      }
    } 
    finally{
      this.publish(this.events.FINISH_LOADING, {})
    }
  }

  render(item){
    this.me.innerHTML = itemDetailView(item);
  }
  

// TODO: Carry this to utils  
  attachEventListeners(item){
    this.addListenerToName();
    this.addListenerToPrice();
    this.addListenerToSubmit(item);
  }

  // TODO: Carry this to utils
  addListenerToName(){
    const name = this.me.querySelector('#name');
    name.addEventListener('keyup', () => {
      this.checkValidationForm();
    });
  }
  
  // TODO: Carry this to utils
  addListenerToPrice(){
    const price = this.me.querySelector('#price');
    price.addEventListener('keyup', () => {
      this.checkValidationForm();
    });
  }

  checkValidationForm(){
    this.me.checkValidity() 
      ? this.me.querySelector('#submit-button').removeAttribute('disabled')
      : this.me.querySelector('#submit-button').setAttribute('disabled', true);
  }

  addListenerToSubmit(item){
    this.me.addEventListener(this.events.SUBMIT, async (event) => {
      event.preventDefault();
      item.name = this.me.elements.name.value,
      item.description = this.me.elements.description.value,
      item.isType = this.me.elements.isType.value,
      item.price = this.me.elements.price.value,
      // FIXME:
      // image: this.me.elements.file.files.length > 0 
      //   ? this.me.elements.file.files[0]
      //   : null
      
      this.publish(this.events.START_LOADING, {});
      try {
        const isUserLogged = await this.checkIfUserIsLogged();
        if (isUserLogged) {
          await itemsService.putItem(item);
          //TODO: Notify the user item modified successfully
          window.location.href = '/';
        }
        else {
          window.location.href = '/login.html';
          //TODO: Warn the user needs to be logged in
        }
      } 
      catch (error) {  
        this.publish(this.events.ERROR, error)
      } 
      finally{
        this.publish(this.events.FINISH_LOADING)
      }
    })
  }

  async checkIfUserIsLogged() {
    return await usersService.isUserLogged();
  }

  focusInName() {
    const nameInput = this.me.querySelector('#name');
    nameInput.focus();
  }
}