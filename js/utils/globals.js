// FIXME: Export only BASE_URL and BASE_URL_API

export const GLOBALS = {
  BASE_URL: 'http://127.0.0.1:8000/',
  BASE_URL_API: 'http://127.0.0.1:8000/api/',
  BASE_URL_API_ITEMS: 'http://127.0.0.1:8000/api/items',
  BASE_URL_API_USERS: 'http://127.0.0.1:8000/api/users',
  BASE_URL_API_MOVIES: 'http://127.0.0.1:8000/api/movies',
  BASE_URL_UPLOAD: 'http://127.0.0.1:8000/upload', 
  BASE_URL_REGISTER_USER: 'http://127.0.0.1:8000/auth/register', 
  BASE_URL_LOGIN_USER: 'http://127.0.0.1:8000/auth/login', 
  TOKEN_KEY: 'token',
};

export function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEmptyObject(obj) {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}