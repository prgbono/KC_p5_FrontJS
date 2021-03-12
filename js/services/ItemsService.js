import { GLOBALS } from './../utils/globals.js'
import api from './api.js';
import usersService from './UsersService.js';

export default {
  getItems: async function() {
    const currentUser = await usersService.getUser();
    //TODO: Paginate and sort.
    const url = GLOBALS.BASE_URL_API_ITEMS;
    //TODO: Refactor - Carry GET verb to api.js
    const response = await fetch(url);

    if (response.ok) {
      // items properties mapping
      const items = await response.json();
      return items.map(item => {
        // const user = item.user || {};
        return {
          // TODO: Evitar las posibles inyecciones de código -> replace(/(<([^>]+)>)/gi, ""),
          id: item.id,
          name: item.name.replace(/(<([^>]+)>)/gi, ""),
          description: item.description.replace(/(<([^>]+)>)/gi, ""),
          isType: item.isType || null,
          price: item.price || '??',
          image: item.image || null,
          // tags: item.tags,
          date: item.createdAt || item.updatedAt,
          // canBeDeleted;
        }
      });
    }
    else {
      throw new Error(`HTTP Error: ${response.status}`)
    }
  }, 
  
  async getItemById(itemId) {
    const currentUser = await usersService.getUser();
    const url = `${GLOBALS.BASE_URL_API}items/${itemId}`
    const response = await fetch(url);
    if (response.ok){
      const item = await response.json();
      return {
        id: item.id,
        name: item.name.replace(/(<([^>]+)>)/gi, ""),
        description: item.description.replace(/(<([^>]+)>)/gi, ""),
        isType: item.isType || null,
        price: item.price || '??',
        image: item.image || null,
        // tags: item.tags,
        date: item.createdAt || item.updatedAt,
        canBeDeleted: currentUser ?  currentUser.userId === item.userId : false
      }
    }
    else{
      throw new Error(`HTTP Error: ${response.status}`)
    }
  },

  postItem: async function(item){
    const url = GLOBALS.BASE_URL_API_ITEMS;
    if (item.image) {
      const imageURL = await api.uploadImage(item.image);
      item.image = imageURL;
    }
    return await api.post(url, item);
  },

  deleteItem: async function(item) {
    const url = `${GLOBAL.BASE_URL_API_ITEMS}/${item.id}`;
    return await api.delete(url);
  },

  putItem: async function(item){
    const url = `${GLOBALS.BASE_URL_API}items/${item.id}`;
    return await api.put(url, item);
  },

  deleteItem: async function(item){
    const url = `${GLOBALS.BASE_URL}api/items/${item.id}`;
    return await api.delete(url); 
  }
  
}