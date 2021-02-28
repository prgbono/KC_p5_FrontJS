import pubSub from './../services/Pubsub.js'
export default class BaseController {
  
  constructor(element) {
    this.me = element;
    this.pubSub = pubSub;
    this.events = {
        START_LOADING: 'startLoading',
        FINISH_LOADING: 'finishLoading',
        ERROR: 'error',
        CLICK: 'click',
        THERE_IS_NO_ITEMS: 'noItemsInTheDB',
        PUBLISH_NEW_ITEM: 'submit',
        DO_LOGIN: 'submit',
    //     SEARCH: 'search',
    //     TWEET_DELETED: 'tweetDeleted'
    };
  }

  subscribe(eventName, eventHandler) {
    this.pubSub.subscribe(eventName, eventHandler);
  }

  publish(eventName, eventData) {
    this.pubSub.publish(eventName, eventData);
  }
}