function showCategories() {
  const parent = document.getElementById('categories');

  data.forEach(category => {
    const myCategoryElement = document.createElement('div');
    myCategoryElement.textContent = category.name;
    myCategoryElement.setAttribute('data-category', category.key);
    myCategoryElement.className = "menu";

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
    productElement.className = "menu";

    parent.appendChild(productElement);
  });
}

function showProductInfo(categoryId, productId) {
  const selectedCategory = data.find(category => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(product => product.id == productId);

  const parent = document.getElementById('product');
  parent.innerHTML = `
    <h2 class="productName">${selectedProduct.name}</h2>
    <p class="productPrice" data-price=${selectedProduct.price}>Цена: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

  const buyButton = document.createElement('input');
  buyButton.setAttribute('type', 'button');
  buyButton.setAttribute('value', 'Купить');
  buyButton.setAttribute('class', 'btnSubmit');
  parent.appendChild(buyButton);
}
function classActive(event) {
  let divElem = event.target.parentNode.querySelectorAll('.menu');
  divElem.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
  if (event.target.classList.contains("menu")){
    event.target.classList.add('active');
  }
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
    productName: productName.textContent,
    productPrice,
    name,
    city,
    post,
    pay,
    quantity,
    comment,
  }
  console.log("productName " + productName + "productPrice " + productPrice);
  if(validation(form, formObj)){
    form.classList.remove("active");
    let finalSum = parseFloat(productPrice) * parseFloat(quantity);
    infoBlock.innerHTML = `
    <h1>Заказ на ${productName.textContent}</h1>
    <h1>Цена: $${productPrice} x ${quantity}, итого: $${finalSum}</h1>
    <h2>ФИО: ${name}, город: ${city}, номер почты: ${post}, оплата: ${pay}</h2>
    <h2>Комментарий: <span>${comment === "" ? "не указан" : comment}</span></h2>
    <h1 style="color:green">Принят</h1>
    <button class="back-shop">Вернуться к заказу</button>
    `;
    setOrdersToLocalStorage(formObj);
  }
}
function showFormReg() {
  let form = document.getElementsByName("form-reg")[0];
  form.classList.add("active");
}
function validation(form, obj) {
  let valid = true;
  let elements = form.querySelectorAll('input, select');
  elements.forEach((e)=> {
    if (e.value === "") {
      e.classList.add("error");
    } else {
      e.classList.remove("error");
    }
  })
  for(let key in obj){
    if(key !== "comment" && key !== "productName" && key !== "productPrice") {
      if (obj[key] === "" || obj[key] === undefined) {
        form.querySelector(`.error-${key}`).classList.remove("hidden");
        valid = false
      } else {
        form.querySelector(`.error-${key}`).classList.add("hidden");
      }
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
function showOrdersPage(btn) {
  document.getElementById("productsBlock").classList.remove("active");
  btn.target.classList.add("hidden");
  document.getElementById("btnBack").classList.remove("hidden");
  document.getElementById("ordersBlock").classList.add("active");
}
function showProductPage(btn) {
  document.getElementById("productsBlock").classList.add("active");
  btn.target.classList.add("hidden");
  document.getElementById('btnOrders').classList.remove("hidden");
  document.getElementById("btnBack").classList.add("hidden");
  let ordersBlock = document.getElementById("ordersBlock");
  ordersBlock.classList.remove("active");
  ordersBlock.innerHTML = '';
}
function formatDate() {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const addZero = (number) => (number < 10 ? "0" + number : number);
  const realDate = `${addZero(day)}-${addZero(month)}-${year}`;
    return realDate;
}
function setOrdersToLocalStorage(orderObj) {
  let localStorageOrders = (window.localStorage.getItem("ordersData"));
  let id;
  if (localStorageOrders === null) {
    localStorageOrders = [];
    id = 1;
  } else {
    localStorageOrders = JSON.parse(localStorageOrders);
    id = localStorageOrders.length + 1;
  }
  orderObj.date = formatDate();
  orderObj.id = id;
  localStorageOrders.push(orderObj);
  localStorage.setItem(`ordersData`, JSON.stringify(localStorageOrders));
}

function showMyOrders(delCase){
  let ordersData = JSON.parse(window.localStorage.getItem("ordersData"));
  const ordersBlock = document.getElementById("ordersBlock");
  if (delCase) {
    ordersBlock.innerHTML = "";
    updateIdLocalStorage(ordersData);
  }
  ordersData.forEach(order => {
    const divBlock = document.createElement("div");
    divBlock.classList.add("order-block");
    const btnBlock = document.createElement("div");
    btnBlock.classList.add("del");
    const btn = document.createElement("button");
    btn.textContent = "Удалить";
    btn.classList.add("delete-order");
    btn.setAttribute("del-id", order.id);
    btnBlock.appendChild(btn);
    const orderElem = document.createElement("div");
    orderElem.textContent = `Дата: ${order.date}, Сумма: ${order.productPrice * order.quantity}$`;
    orderElem.classList.add("order");
    orderElem.setAttribute("data-id", order.id);
    divBlock.appendChild(orderElem);
    divBlock.appendChild(btnBlock);
    ordersBlock.appendChild(divBlock);
  })
}
function updateIdLocalStorage(ordersData) {
  ordersData.forEach((obj, index) => {
    obj.id = index + 1;
  });
  localStorage.setItem("ordersData", JSON.stringify(ordersData));
}
function showOrder(orderId, elem){
  let elemInfo = elem.target.querySelector(".order-info");
  if (elemInfo !== null){
    elemInfo.remove();
  } else {
    let ordersData = JSON.parse(window.localStorage.getItem("ordersData"));
    const orderObj = ordersData.find(obj => obj.id === Number(orderId));
    let infoOrder = document.createElement("div");
    infoOrder.classList.add("order-info");
    infoOrder.innerHTML = `
  <p>Товар: ${orderObj.productName}</p>
  <p>Цена: ${orderObj.productPrice}$</p>
  <p>Количество: ${orderObj.quantity}</p>
  <p>Cпособ оплаты: ${orderObj.pay}</p>
  <p>Номер почты: ${orderObj.post}</p>
  <p>Имя Фамилия: ${orderObj.name}</p>
  <p>Город: ${orderObj.city}</p>
  <p>Комментарий: ${orderObj.comment}</p>
  `;
    elem.target.appendChild(infoOrder);
  }
}
function delOrder(elem) {
  let checkup = confirm("Вы уверены что хотите удалить этот товар?");
  if (checkup) {
    let deleteId = elem.target.getAttribute("del-id");
    let ordersData = JSON.parse(window.localStorage.getItem("ordersData"));
    let updateOrders = ordersData.filter(obj => obj.id !== Number(deleteId));
    console.log(updateOrders);
    localStorage.setItem("ordersData", JSON.stringify(updateOrders));
    showMyOrders(true);
  }
}