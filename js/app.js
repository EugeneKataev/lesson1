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
    showFormReg();
  }
});
document.getElementById('btnSubmit').addEventListener("click", (e) =>{
  e.preventDefault();
  showFinalInfo();
})
document.getElementById('info').addEventListener("click", (e) =>{
  if (e.target.classList.contains('back-shop')){
    resetInputs();
  }
})
document.getElementById('btnOrders').addEventListener("click", (e) => {
  showOrdersPage(e);
  showMyOrders();
})
document.getElementById('btnBack').addEventListener("click", (e) => {
  showProductPage(e);
})
document.getElementById('ordersBlock').addEventListener("click", (e) => {
  if (e.target.classList.contains("order")){
    console.log(e.target);
  }
})
