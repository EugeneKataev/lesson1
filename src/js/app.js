window.addEventListener('DOMContentLoaded', showUsers);

document.getElementById("users").addEventListener("click", (e)=>{
    switch (true) {
        case e.target.classList.contains("btn-view"):
            panelEditInfoAdd("view");
            showUserViewInfo(e);
                break;
        case e.target.classList.contains("btn-edit"):
            panelEditInfoAdd("edit");
            editUser(e);
                break;
        case e.target.classList.contains("btn-del"):
            deleteUser(e);
                break;
    }
})
document.getElementById("btnSave").addEventListener("click", (e)=>{
    userSave(e); //create and edit
})
document.getElementById("add-user").addEventListener("click", (e)=>{
    panelEditInfoAdd("add");
    createUser();
})