import BaseController from './BaseController.js'

export default class SpinnerController extends BaseController{

  constructor (element){
    super (element);

    this.subscribe(this.events.START_LOADING, () => {
      this.showSpinner();
    });

    this.subscribe(this.events.FINISH_LOADING, () => {
      this.hideSpinner();
    });
  }

  showSpinner() {
    this.me.classList.remove('hidden');
  }

  hideSpinner() {
    this.me.classList.add('hidden');
  }

}