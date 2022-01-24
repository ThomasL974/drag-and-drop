
/*Parent*/
let container = document.querySelector('.container');
/*Menu header*/
let menu = document.createElement('div');
const header = document.querySelector('.header');
menu.classList.add('menu');
menu.innerHTML= `
    <div class="first-title">
        <span>GRIDSTACK</span>
    </div>
    <div class="second-title">
        <span>DRAG AND DROP</span>
    </div>
    <div class="third-title">
        <span>Thomas LAMOLY</span>
    </div>
`;
header.appendChild(menu);

/*Card
let card = document.querySelector('.grid-stack');
console.log(card);
card.innerHTML = `
<div class="grid-stack-item">
    <div class="grid-stack-item-content">Item 1</div>
</div>
`;*/

/* Button add */
let addButton = document.createElement('div');
addButton.classList.add('btn');
addButton.innerHTML=`
    <svg width="232" height="64" viewBox="0 0 232 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="btn-path" d="M32 1.5H200C216.845 1.5 230.5 15.1553 230.5 32C230.5 48.8447 216.845 62.5 200 62.5H32C15.1553 62.5 1.5 48.8447 1.5 32C1.5 15.1553 15.1553 1.5 32 1.5Z" fill="#fbeaec" stroke="#2f3c7e" stroke-width="1" />
    </svg>
    <span>ADD BOX</span>
`;
addButton.addEventListener('click', () =>{
        var node = {
          w: Math.round(1 + 3 * Math.random()),
        };
        grid.addWidget(node);
})

container.insertBefore(addButton, container.children[2]);
