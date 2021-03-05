export const itemDetailView = (item) => {

  let deleteButtonHtml='';
  if (item.canBeDeleted) {
    deleteButtonHtml = `<div>
      <button class="button is-danger">Eliminar</button>
    </div>`
  }

  return `<div class="columns">
    <div class="column is-one-third">
      <figure class="image">
        <img src="${item.image}">
      </figure>
    </div>

    <div class="column is-two-thirds">
      <div class="field">
        <label class="label">Artículo</label>
        <div class="control">
          <input class="input" id="name" name="name" type="text" value="${item.name}" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Descripción</label>
        <div class="control">
          <textarea name="description" class="textarea" >
            ${item.description} 
          </textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Vendo / Busco</label>
        <div class="select">
          <select name="isType" required>
            <option value="Vende" selected>Vendo</option>
            <option value="Busca">Busco</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label class="label">Precio</label>
        <div class="control">
          <input class="input" type="number" id="price" name="price" value=${item.price} required>
        </div>
      </div>

      <div class="columns">
        <div class="column is-left">
          <div class="field is-grouped">
            <div class="control">
              <button id="submit-button" class="button is-link" disabled>Editar</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancelar</button>
            </div>
          </div>
        </div>
        <div class="column is-right">
          ${deleteButtonHtml}
        </div>
      </div>
      

    </div>
  </div>`
}