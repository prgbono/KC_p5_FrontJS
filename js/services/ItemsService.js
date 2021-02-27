const BASE_URL = 'http://127.0.0.1:8000/api';
//TODO: TOKEN_KEY

//FIXME: NO USAR ARROW F(x)s EN LOS SERVICIOS

export default {
  getItems: async function() {
    //TODO: Gestión del token...

    //TODO: parámetro expand en la url...
    const url = `${BASE_URL}/items`;
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
  }
}