import { GLOBALS, isEmptyObject } from '../utils/globals.js'
import UsersService from './UsersService.js';

//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default{
  
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
    const token = await UsersService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, config);
    const data = await response.json(); 
    if (response.ok) {
        return data;
    } else {            
        if (response.status === 401) localStorage.removeItem('token');
        if (response.status === 400) return data; 
        throw new Error(data.message || !isEmptyObject(data) ? JSON.stringify(data) : 'Error unhandled');
    }
  },

  uploadImage: async function(image) {
    const form = new FormData();
    form.append('file', image);
    const url = GLOBALS.BASE_URL_UPLOAD;
    const response = await this.post(url, form, false);
    return response.path || null;
  },

  post: async function(url, postData, json=true) {
    return await this.request('POST', url, postData, json);
  },

  delete: async function(url) {
    return await this.request('DELETE', url, {});
  },

  put: async function(url, putData, json=true) {
    return await this.request('PUT', url, putData, json);
  },

}
