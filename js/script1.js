let pBlock = document.getElementById("pFocus");
let div;

pBlock.addEventListener('mouseenter', () => {
    div = document.createElement('div')
    document.body.appendChild(div);
    div.textContent = "div эллемент";
});
pBlock.addEventListener('mouseleave', () => {
    div && div.remove();
});