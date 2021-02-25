export const itemView = (item) => {  
  // TODO: remove description and beauty the date
  return `<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- FIXME: image -->
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="${item.name}">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- FIXME: what's this content? -->
        <!-- <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div> -->
        <div class="media-content">
          <p class="title is-4">${item.name}</p>
        </div>
      </div>
      <div class="content">
        ${item.description}
        <br>
        <time datetime="2016-1-1">${item.date}</time>
      </div>
    </div>
    <footer class="card-footer">
      <!-- FIXME: links, where do they go? -->
      <a href="#" class="card-footer-item">${item.isType}</a>
      <a href="#" class="card-footer-item">${item.price}€</a>
    </footer>
  </div>`
};


// export const itemView = (item) => {
//   // TODO: deleteButton staff

//   // TODO: image staff
//   // console.log('item in the view: ', item);
