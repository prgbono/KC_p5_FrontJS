import itemsService from '../services/ItemsService.js';
import BaseController from './BaseController.js';
import usersService from './../services/UsersService.js'

export default class NewItemFormController extends BaseController {
  
  constructor(element) {
    super(element);
    this.attachEventListeners();
    this.checkIfUserIsLogged();
    this.focusInName();
  }

  attachEventListeners(){
    // Check validation form each time a required input is filled (isType is set by default)
    this.addListenerToName();
    this.addListenerToPrice();

    // add listener to submit button
    this.addListenerToSubmit();
  }

  addListenerToName(){
    const name = this.me.querySelector('#name');
    name.addEventListener('keyup', () => {
      this.checkValidationForm();
    });
  }
  
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

  addListenerToSubmit(){
    this.me.addEventListener(this.events.PUBLISH_NEW_ITEM, async (event) => {
      event.preventDefault();
      const item = {
        name: this.me.elements.name.value,
        description: this.me.elements.description.value,
        isType: this.me.elements.isType.value,
        price: this.me.elements.price.value,
        image: this.me.elements.file.files.length > 0 
          ? this.me.elements.file.files[0]
          : null
      }
      this.publish(this.events.START_LOADING, {});
      try {
        await itemsService.postItem(item);
        //TODO: Notify the user item created successfully or drive him to Home with his item published
        window.location.href = '/';
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
    const userIsLogged = await usersService.isUserLogged();
    if (!userIsLogged) {
      window.location.href = '/login.html?next=/new-item.html';
    } else {
      this.publish(this.events.FINISH_LOADING);
    }
  }

  focusInName() {
    const nameInput = this.me.querySelector('#name');
    nameInput.focus();
  }
}