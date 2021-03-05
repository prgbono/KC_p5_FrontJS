export const modalDeleteConfirmationView = (itemName) => {
  return `<div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sure?</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        This will remove the product ${itemName}.
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger">Yes, remove item</button>
        <button class="button">Cancel</button>
      </footer>
    </div>`
};
