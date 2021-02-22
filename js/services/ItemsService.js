const BASE_URL = 'http://127.0.0.1:8000/api';
//TODO: TOKEN_KEY

//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  getItems: async function() {
    //TODO: Gestión del token...

    //TODO: parámetro expand en la url...
    const url = `${BASE_URL}/items`;
    const response = await fetch(url);
    console.log(`🚀  FRG 🚀 ~ file: ItemsService.js ~ line 13 ~ getItems:function ~ response`, response);

    // https://developer.mozilla.org/es/docs/Web/API/Response/ok
    if (response.ok) {
      // Map items properties
    }
    else {
      throw new Error(`HTTP Error: ${response.status}`)
    }
  }
}