import { GLOBALS } from './../utils/globals.js'
//TODO: TOKEN_KEY


//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  getItems: async function() {
    //TODO: Gestión del token...

    //TODO: parámetro expand en la url...
    const url = GLOBALS.BASE_URL_API_ITEMS;
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

  request: async function(method, url, postData, json=true) {
    const config = {
      method: method,
      headers: {},
      body: null
    };
    if (json) {
      config.headers['Content-Type'] = 'application/json';
      config.body = JSON.stringify(postData);  
    } else {
      config.body = postData;
    }
    // const token = await this.getToken();
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    const response = await fetch(url, config);
    const data = await response.json(); //Fetch, doble promesa??
    if (response.ok) {
        return data;
    } else {            
        // TODO: mejorar gestión de errores
        // TODO: si la respuesta es un 401 no autorizado, debemos borrar el token (si es que lo tenemos);
        throw new Error(data.message || JSON.stringify(data));
    }
  },

  uploadImage: async function(image) {
    debugger;
    const form = new FormData();
    form.append('file', image);
    const url = GLOBALS.BASE_URL_UPLOAD;
    const response = await this.post(url, form, false);
    console.log('Response from /upload: ', response);
    debugger;
    return response.path || null;
  },

  postItem: async function(item){
    const url = GLOBALS.BASE_URL_API_ITEMS;
    if (item.image) {
      const imageURL = await this.uploadImage(item.image);
      item.image = imageURL;
      console.log(`🚀  FRG 🚀 ~ file: ItemsService.js ~ line 54 ~ postItem:function ~ imageURL`, imageURL);
      debugger;
    }
    return await this.post(url, item);
  },

  post: async function(url, postData, json=true) {
    return await this.request('POST', url, postData, json);
  },
  
}