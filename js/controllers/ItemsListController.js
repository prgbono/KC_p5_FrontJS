import itemsService from './../services/ItemsService.js'

export default class ItemsListController {

  // constructor(element) {
  //   this.element = element;
  //   // this.pubSub = pubSub;
  //   // this.events = {
  //   //     START_LOADING: 'startLoading',
  //   //     FINISH_LOADING: 'finishLoading',
  //   //     ERROR: 'error'
  //   // };
  // }

  render(items) {

  }

  async loadItems(){
    console.log('loadItems');
    
    //TODO: publish
    try {
      const items = await itemsService.getItems();
      this.render(items);
    } 
    catch (error) {
      console.error('Catch error: ', error);
      // TODO: publish error
    } 



    // finally{
    //   //TODO: publish 
    // }
  }
}