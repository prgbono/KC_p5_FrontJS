export const itemDetailView = (item) => {
  return `<div class="field">
    <label class="label">Artículo</label>
    <div class="control">
      <input class="input" id="name" name="name" type="text" value=${item.name} required>
    </div>
  </div>

  <div class="field">
    <label class="label">Descripción</label>
    <div class="control">
      <textarea 
        name="description" class="textarea" 
        value = ${item.description}>
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

  <!-- //TODO: imagen -->

  <div class="field">
    <label class="label">Precio</label>
    <div class="control">
      <input class="input" type="number" id="price" name="price" value=${item.price} required>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button id="submit-button" class="button is-link" disabled>Editar</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancelar</button>
    </div>
  </div>`
}