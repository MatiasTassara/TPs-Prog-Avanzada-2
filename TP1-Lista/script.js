
//let buttonList = document.querySelector('[id^="button-"]').id;
let productList = document.getElementById('prod');
let wishList = document.getElementById('wish');
console.log(wishList);
/*
let listItems = document.querySelectorAll('.prod');
let tagsItems = document.querySelectorAll('.prod-');
console.log(listItems);
console.log(tagsItems);
let listItems = document.querySelectorAll('.prod');
            let tagsItems = document.querySelectorAll('.prod-');
            listItems.forEach( (value) => {
                console.log(value);
                productList.appendChild(value);
            })
/*
listItems.forEach( (value) => {
    console.log(value);
    
})
*/


productList.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){ //check tag of event.target, event.target.type checks type(submit)
            let buttonPushed = event.target;
            let classNumber = buttonPushed.classList.value.charAt(buttonPushed.classList.value.length - 1);
            buttonPushed.textContent = 'Quitar de la lista';
            let item = document.getElementById('item-' + classNumber);
            let br = document.createElement('br');
            wishList.appendChild(item);
            wishList.appendChild(buttonPushed);
            wishList.appendChild(br);
            console.log(wishList);
            
        }
});

wishList.addEventListener('click', (event) => {
    let buttonPushed = event.target;
    let classNumber = buttonPushed.classList.value.charAt(buttonPushed.classList.value.length - 1);
    buttonPushed.textContent = 'Agregar a la lista';
    let item = document.getElementById('item-' + classNumber);
    let br = document.createElement('br');
    let first = productList.firstElementChild;
    productList.insertBefore(item,first);
    productList.insertBefore(buttonPushed,first);
    productList.insertBefore(br,first);
    //ver como ordenar la lista
    
});
