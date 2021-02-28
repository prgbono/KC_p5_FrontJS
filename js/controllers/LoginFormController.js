import BaseController from './BaseController.js';
import usersService from './../services/UsersService.js';

export default class LoginFormController extends BaseController {

  constructor (element){
    super(element);
    this.attachEventListeners();
  }

  attachEventListeners(){
    console.log('LoginFormCtrl . attachEventListeners');
    
  }

}