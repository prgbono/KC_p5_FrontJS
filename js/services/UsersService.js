import { GLOBALS } from './../utils/globals.js';
import api from './api.js';

//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  login: async function(user){
    console.log(`🚀  FRG 🚀 ~ file: UsersService.js ~ line 5 ~ login:function ~ user`, user);
    const url = GLOBALS.BASE_URL_LOGIN_USER;
    debugger;
    //TODO: usar el refactorizado de request para pasar el method por parámetro???
    return await api.post(url, user);
  },

  saveToken: async function(token) {
    console.log(`🚀  FRG 🚀 ~ file: UsersService.js ~ line 11 ~ saveToken:function ~ token`, token);
    debugger;
    localStorage.setItem(GLOBAL.TOKEN_KEY, token);
  },

  getToken: async function() {
    console.log('UsersService - getToken');
    debugger;
    return localStorage.getItem(GLOBALS.TOKEN_KEY)
  },

  registerUser: async function(user) {
    const url = GLOBALS.BASE_URL_REGISTER_USER;
    console.log(`🚀  FRG 🚀 ~ file: UsersService.js ~ line 5 ~ registerUser:function ~ user`, user);
    debugger;
    //TODO: usar el refactorizado de request para pasar el method por parámetro???
    return await api.post(url, user);
  },

  isUserLogged: async function() {
    console.log('UsersService - isUserlogged');
    debugger;
    return await this.getToken() !== null;
  },

  getUser: async function() {
    console.log('UsersService - getUser');
    debugger;
    try {
        const token = await this.getToken();
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
            return null; //Not valid token
        }
        const payload = tokenParts[1]; // Token payload is base64 encoded
        const jsonStr = atob(payload); // Decode base64
        debugger; //see what's in jsonStr
        const { userId, username } = JSON.parse(jsonStr); 
        return { userId, username };
    } catch (error) {
        //TODO: PubSub ErrorControler?? 
        return null;
    }
  },

}