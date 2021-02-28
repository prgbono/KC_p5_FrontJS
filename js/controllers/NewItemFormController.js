import ItemsService from '../services/ItemsService.js';
import BaseController from './BaseController.js';

export default class NewItemFormController extends BaseController {
  
  constructor(element) {
    super(element);
    this.attachEventListeners();

    //TODO:  this.checkIfUserIsLogged();
    //TODO:  this.focusInTextarea();
    
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
        await ItemsService.postItem(item);
        //TODO redirección '/?item=itemOK ???'
      } 
      catch (error) {  
        this.publish(this.events.ERROR, error)
      } 
      finally{
        this.publish(this.events.FINISH_LOADING)
      }
    })
  }
}