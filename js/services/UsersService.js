import { GLOBALS } from './../utils/globals.js';
import api from './api.js';

//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  login: async function(user){
    const url = GLOBALS.BASE_URL_LOGIN_USER;
    //TODO: usar el refactorizado de request para pasar el method por parámetro???
    return await api.post(url, user);
  },

  saveToken: async function(token) {  
    localStorage.setItem(GLOBALS.TOKEN_KEY, token);
  },

  getToken: async function() {
    console.log('UsersService - getToken');
    return localStorage.getItem(GLOBALS.TOKEN_KEY)
  },

  registerUser: async function(user) {
    const url = GLOBALS.BASE_URL_REGISTER_USER;
    //TODO: usar el refactorizado de request para pasar el method por parámetro???
    return await api.post(url, user);
  },

  isUserLogged: async function() {
    return await this.getToken() !== null;
  },

  getUser: async function() {
    console.log('UsersService - getUser');
    try {
        const token = await this.getToken();
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
            return null; //Not valid token
        }
        const payload = tokenParts[1]; // Token payload is base64 encoded
        const jsonStr = atob(payload); // Decode base64
        const { userId, username } = JSON.parse(jsonStr); 
        return { userId, username };
    } catch (error) {
        return null;
    }
  },

}