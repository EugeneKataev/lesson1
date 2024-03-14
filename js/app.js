window.addEventListener('DOMContentLoaded', showCategories);

document.getElementById('categories').addEventListener('click', event => {
  const categoryId = event.target.getAttribute('data-category');
  classActive(event);
  showProductsByCategory(categoryId);
});

document.getElementById('products').addEventListener('click', event => {
  const productId = event.target.getAttribute('data-product');
  const categoryId = event.target.getAttribute('data-category');
  classActive(event);
  showProductInfo(categoryId, productId);
});
document.getElementById('product').addEventListener('click', event => {
  if (event.target.classList.contains('btnSubmit')) {
    let productName = document.querySelector('.productName');
    let productPrice = document.querySelector('.productPrice');
    let infoBlock = document.getElementById('info');
    infoBlock.innerHTML = `
    <h1>Order for ${productName.textContent}</h1>
    <h1>${productPrice.textContent}</h1>
    <h1 style="color:green">Accepted</h1>
    `;
    setTimeout(resetInputs, 1500);
  }
});
