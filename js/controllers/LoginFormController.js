import BaseController from './BaseController.js';
import usersService from './../services/UsersService.js';

export default class LoginFormController extends BaseController {

  constructor (element){
    super(element);
    this.attachEventListeners();
  }

  attachEventListeners(){
    this.me.querySelectorAll('input').forEach((input) => {
      input.addEventListener('keyup', () => {
        if (input.validity.valid) {
          input.classList.add("is-success");
          input.classList.remove("is-danger");
        } else {
          input.classList.remove("is-success");
          input.classList.add("is-danger");
        }
        this.checkValidationForm();
      });
    })
    this.addListenerToSubmit();
  }

  //TODO: Refactor. Same function on NewItemFormController
  checkValidationForm(){
    this.me.checkValidity() 
      ? this.me.querySelector('button').removeAttribute('disabled')
      : this.me.querySelector('button').setAttribute('disabled', true);
  }

  addListenerToSubmit(){
    this.me.addEventListener(this.events.DO_LOGIN, async (event) => {
      event.preventDefault();
      const user = {
        username: this.me.elements.email.value,
        password: this.me.elements.pass.value,
      }
      this.publish(this.events.START_LOADING, {});
      
      try {
        const data = await usersService.login(user);
        usersService.saveToken(data.accessToken);

        //Once logged in, drive the user to items list.
        let next = '/';
        const queryParams = window.location.search.replace('?', '');  
        debugger;
        const queryParamsParts = queryParams.split('=');
        if (queryParamsParts.length >= 2 && queryParamsParts[0] === 'next') {
          next = queryParamsParts[1];
        }
        window.location.href = next;
      } catch (error) {
        this.publish(this.events.ERROR, error);
      } finally {
        this.publish(this.events.FINISH_LOADING);
      }
    })
  }

}