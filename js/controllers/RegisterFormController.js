import BaseController from './BaseController.js';
import usersService from './../services/UsersService.js';

export default class LoginFormController extends BaseController {

  constructor (element){
    super(element);
    this.attachEventListeners();
  }

  attachEventListeners(){
    const emailInput = this.me.querySelector('input[type="email"]');
    emailInput.addEventListener('keyup', () => {
      if (emailInput.validity.valid) {
        emailInput.classList.add("is-success");
        emailInput.classList.remove("is-danger");
      } else {
        emailInput.classList.remove("is-success");
        emailInput.classList.add("is-danger");
      }
      this.checkValidationForm();
    });

    this.me.querySelectorAll('input[type="password"]').forEach((input) => {
      input.addEventListener('keyup', () => {
        if ((input.validity.valid) && (this.isPasswordConfirmed())){
          this.me.querySelectorAll('input[type="password"]').forEach((input) => {
            input.classList.add("is-success");
            input.classList.remove("is-danger");
          });
        } 
        else {
          this.me.querySelectorAll('input[type="password"]').forEach((input) => {
            input.classList.remove("is-success");
            input.classList.add("is-danger");
          });
        }
        this.checkValidationForm();
      })
    })
    this.addListenerToSubmit();
  }

  isPasswordConfirmed(){
    const passInput = this.me.elements.pass.value;
    const passConfirmInput = this.me.elements['pass-confirm'].value;
    return passInput === passConfirmInput;
  }

  addListenerToSubmit(){
    this.me.addEventListener(this.events.DO_REGISTER, async (event) => {
      event.preventDefault();
      const user = {
        username: this.me.elements.email.value,
        password: this.me.elements.pass.value,
      }
      this.publish(this.events.START_LOADING, {});
      try {
        this.makePost(user)
      } catch (error) {
        this.publish(this.events.ERROR, error);
      } finally {
        this.publish(this.events.FINISH_LOADING);
      }
    })
  }

  //TODO: Refactor. Same function on NewItemFormController
  checkValidationForm(){
    this.me.checkValidity() && this.isPasswordConfirmed() 
      ? this.me.querySelector('button').removeAttribute('disabled')
      : this.me.querySelector('button').setAttribute('disabled', true);
  }
  
  async makePost (user) {
    const response = await usersService.registerUser(user);
    !response.message 
      ? window.location.href = '/login.html'
      : this.publish(this.events.ERROR, response.message);
        
    //TODO: Gestionar la creación del usuario. 
    // LLevarlo por ejemplo al login con el username relleno.
    // Notificar que el usuario ha sido creado con éxito.
    
  }

}