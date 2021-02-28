import { GLOBALS } from './../utils/globals.js'
import api from './api.js'
//TODO: TOKEN_KEY


//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  getItems: async function() {
    //TODO: Gestión del token...

    //TODO: parámetro expand en la url...
    const url = GLOBALS.BASE_URL_API_ITEMS;
    //TODO: Refactor - Carry GET verb to api.js
    const response = await fetch(url);

    // https://developer.mozilla.org/es/docs/Web/API/Response/ok
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
          date: item.createdAt,
          // canBeDeleted;
        }
      });
    }
    else {
      throw new Error(`HTTP Error: ${response.status}`)
    }
  },  

  postItem: async function(item){
    const url = GLOBALS.BASE_URL_API_ITEMS;
    if (item.image) {
      const imageURL = await api.uploadImage(item.image);
      item.image = imageURL;
      console.log(`🚀  FRG 🚀 ~ file: ItemsService.js ~ line 54 ~ postItem:function ~ imageURL`, imageURL);
      debugger;
    }
    return await api.post(url, item);
  },

  deleteItem: async function(item) {
    const url = `${GLOBAL.BASE_URL_API_ITEMS}/${item.id}`;
    return await api.delete(url);
  }
  
}