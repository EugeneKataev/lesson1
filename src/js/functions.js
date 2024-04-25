function createElement(typeName, classArr, text) {
  const elem = document.createElement(typeName);
  classArr.forEach((className) => {
    elem.classList.add(className);
  })
  elem.innerHTML = text;
  return elem
}
function getUsersAndCheckLocalStorage() {
  let localStorageUsers = localStorage.getItem("dataUsers");
  return localStorageUsers !== null ? JSON.parse(localStorageUsers) : users;
}
function showUsers() {
  let usersBlock = document.getElementById("users");
  usersBlock.innerHTML = "";

  let usersData = getUsersAndCheckLocalStorage();

  usersData.forEach((user) => {
    let userDiv = createElement("div", ["user"], `<div class="user-name">${user.name}</div>`);
    let userBtnBlock = createElement("div", ["user-buttons"], "");
    userBtnBlock.setAttribute("data-id", user.id)
    let btnView = createElement("button", ["btn", "btn-view"], "View");
    let btnEdit = createElement("button", ["btn", "btn-edit"], "Edit");
    let btnDelete = createElement("button", ["btn", "btn-del"], "Delete")
    usersBlock.appendChild(userDiv);
    userDiv.appendChild(userBtnBlock);
    userBtnBlock.appendChild(btnView);
    userBtnBlock.appendChild(btnEdit);
    userBtnBlock.appendChild(btnDelete);
  })
}
function panelEditInfoAdd(option) {
  let editBlock = document.getElementById("panel-add-edit");
  let h2Element = document.querySelector(".head-block-edit h2");
  let blockInfo = document.getElementById("panel-info");
  let btnSave = document.getElementById("btnSave");
  switch (option) {
    case "view":
      editBlock.classList.remove("active");
      h2Element.textContent = "Info Panel";
      break
    case "edit":
      editBlock.classList.add("active");
      h2Element.textContent = "Edit Panel";
      blockInfo.innerHTML = "";
      btnSave.textContent = "Save"
      break
    case "add":
      editBlock.classList.add("active");
      h2Element.textContent = "Create Panel";
      blockInfo.innerHTML = "";
      btnSave.textContent = "create";
      break
    case "panel":
      h2Element.textContent = "Panel";
      editBlock.classList.remove("active");
      blockInfo.innerHTML = "";
  }
}
function showUserViewInfo(elem) {
  const userId = elem.target.parentNode.getAttribute("data-id");
  let userData = getUsersAndCheckLocalStorage();

  const objUser = userData.find(obj => obj.id === userId);
  let blockInfo = document.getElementById("panel-info");

  blockInfo.innerHTML = `
  <div class="block-edit"><p> name: </p><p>${objUser.name}</p></div>
  <div class="block-edit"><p> login: </p><p>${objUser.login}</p></div>
  <div class="block-edit"><p> email: </p><p>${objUser.email}</p></div>
  <div class="block-edit"><p> age: </p><p>${objUser.age}</p></div>
  `;
}
function editUser(elem) {
  const userId = elem.target.parentNode.getAttribute("data-id");
  let userData = getUsersAndCheckLocalStorage();
  const objUser = userData.find(obj => obj.id === userId);
  let inputName = document.getElementById("input-name");
  let inputLogin = document.getElementById("input-login");
  let inputEmail = document.getElementById("input-email");
  let inputAge = document.getElementById("input-age");
  inputName.value = objUser.name;
  inputLogin.value = objUser.login;
  inputEmail.value = objUser.email;
  inputAge.value = objUser.age;
  document.getElementById("btnSave").setAttribute("data-id", userId);
}
function validationInputs(arrElem) {
  let valid = true;
  arrElem.forEach((elem)=>{
    if (elem.value === ""){
      elem.classList.add("error");
      valid = false;
    } else {
      elem.classList.remove("error");
    }
  })
  return valid;
}
function userSave(elem) {
  let userId = elem.target.getAttribute("data-id");
  let name = document.getElementById("input-name");
  let login = document.getElementById("input-login");
  let email = document.getElementById("input-email");
  let age = document.getElementById("input-age");
  let arrCheckValid = [name, login, email, age];

  let validation = validationInputs(arrCheckValid);

  if (validation) {
    let dataUsers = getUsersAndCheckLocalStorage();
    if (userId === "") {
      let newId = generateNewId(dataUsers);
      let newObj = {
        id: newId,
        name: name.value,
        login: login.value,
        email: email.value,
        age: age.value,
      }
      dataUsers.push(newObj);
      localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
    } else {
      dataUsers.forEach((obj) => {
        if (obj.id === userId) {
          obj.name = name.value;
          obj.login = login.value;
          obj.email = email.value;
          obj.age = Number(age.value);
        }
      })
      localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
    }
    panelEditInfoAdd("panel");
    showUsers();
  }
}

function createUser() {
  document.getElementById("input-name").value = "";
  document.getElementById("input-login").value = "";
  document.getElementById("input-email").value = "";
  document.getElementById("input-age").value = "";
  let btnCreate = document.getElementById("btnSave");
  btnCreate.setAttribute("data-id", "");
}

function deleteUser(elem){
  let check = confirm("Действительно хотите удалить?");
  if (check) {
    let userId = elem.target.parentNode.getAttribute("data-id");
    let userData = JSON.parse(localStorage.getItem("dataUsers"));
    if (userData === null || userData === undefined) {
      localStorage.setItem("dataUsers", JSON.stringify(users));
      userData = users;
    }
    let indexToDel = userData.findIndex(obj => obj.id === userId);

    if (indexToDel !== -1) {
      userData.splice(indexToDel, 1);
      localStorage.setItem("dataUsers", JSON.stringify(userData));
      showUsers();
    }
    panelEditInfoAdd("panel");
  }
}

function generateNewId(data) {
  if (data.length === 0){
    return 1;
  }
  let maxId = 0
  data.forEach(function(obj) {
    if (obj.id > maxId) {
      maxId = obj.id;
    }
  });
  return maxId + 1;
}