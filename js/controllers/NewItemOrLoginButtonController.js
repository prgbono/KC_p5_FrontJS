import BaseContoller from './BaseController.js';
import usersService from './../services/UsersService.js'

export default class NewItemOrLoginButtonController extends BaseContoller {

  constructor(element){
    super(element);
    this.isUserLogged();
  }

  async isUserLogged(){
    const isUserLogged = await usersService.isUserLogged();
    isUserLogged 
      ? this.me.querySelector('.new-item-button').classList.remove('is-hidden')
      : this.me.querySelector('.login-register-buttons').classList.remove('is-hidden')
  }
}