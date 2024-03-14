function showCategories() {
  const parent = document.getElementById('categories');

  data.forEach(category => {
    const myCategoryElement = document.createElement('div');
    myCategoryElement.textContent = category.name;
    myCategoryElement.setAttribute('data-category', category.key);

    parent.appendChild(myCategoryElement);
  });
}

function showProductsByCategory(categoryId) {
  const selectedCategory = data.find(category => category.key === categoryId);

  const parent = document.getElementById('products');
  parent.innerHTML = '';

  selectedCategory.products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = product.name;
    productElement.setAttribute('data-product', product.id);
    productElement.setAttribute('data-category', categoryId);

    parent.appendChild(productElement);
  });
}

function showProductInfo(categoryId, productId) {
  const selectedCategory = data.find(category => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(product => product.id == productId);

  const parent = document.getElementById('product');
  parent.innerHTML = `
    <h2 class="productName">${selectedProduct.name}</h2>
    <p class="productPrice" data-price=${selectedProduct.price}>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

  const buyButton = document.createElement('input');
  buyButton.setAttribute('type', 'button');
  buyButton.setAttribute('value', 'Buy');
  buyButton.setAttribute('class', 'btnSubmit');
  parent.appendChild(buyButton);
}
function classActive(event) {
  let divElem = event.target.parentNode.querySelectorAll('div');
  divElem.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
  event.target.classList.add('active');
}
function showFinalInfo() {
  let form = document.getElementsByName("form-reg")[0];
  let productName = document.querySelector('.productName');
  let productPrice = document.querySelector('.productPrice').getAttribute("data-price");
  let infoBlock = document.getElementById('info');
  let name = form.name.value;
  let city = form.city.value;
  let post = form.post.value;
  let pay = form.pay.value;
  let quantity = form.quantity.value;
  let comment = form.comment.value;
  let formObj = {
    name,
    city,
    post,
    pay,
    quantity,
  }
  if(validation(form, formObj)){
    form.style.display = "none";
    let finalSum = parseFloat(productPrice) * parseFloat(quantity);
    infoBlock.innerHTML = `
    <h1>Заказ на ${productName.textContent}</h1>
    <h1>Цена: $${productPrice} x ${quantity}, итого: $${finalSum}</h1>
    <h2>ФИО: ${name}, город: ${city}, номер почты: ${post}, оплата: ${pay}</h2>
    <h2>Комментарий: <span>${comment === "" ? "не указан" : comment}</span></h2>
    <h1 style="color:green">Accepted</h1>
    <button class="back-shop">Вернуться к заказу</button>
    `;
  }
}
function showFormReg() {
  let form = document.getElementsByName("form-reg")[0];
  form.style.display = 'block';
}
function validation(form, obj) {
  let valid = true;
  let elements = form.querySelectorAll('input, select');
  elements.forEach((e)=> {
    if (e.value === "") {
      e.style.border = "2px solid red";
    } else {
      e.style.border = "";
    }
  })
  for(let key in obj){
    if (obj[key] === "" || obj[key] === undefined){
      form.querySelector(`.error-${key}`).style.display = 'block';
      valid = false
    } else {
      form.querySelector(`.error-${key}`).style.display = 'none';
    }
  }
  return valid
}
function resetInputs() {
  let form = document.getElementsByName("form-reg")[0];
  document.getElementById('info').innerHTML = '';
  document.getElementById('product').innerHTML = '';
  document.getElementById('products').innerHTML = '';
  form.name.value = "";
  form.city.value = "";
  form.post.value = "";
  form.pay.value = "";
  form.quantity.value = "";
  form.comment.value = "";
}