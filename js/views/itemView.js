import { GLOBALS } from './../utils/globals.js'
export const itemView = (item) => {  
  
  // TODO: remove description and beauty the date
  return `<div class="card">
    <div class="card-image">
      <figure class="image">
        <img src=${item.image} alt=${item.name}>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${item.name}</p>
        </div>
      </div>
      <!-- Fix this height or remove description field here -->
      <div class="content">
        ${item.description}
        <br>
        <time datetime="2016-1-1">${item.date}</time>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">${item.isType}</div>
      <div class="card-footer-item">${item.price}€</div>
    </footer>
  </div>`
};

