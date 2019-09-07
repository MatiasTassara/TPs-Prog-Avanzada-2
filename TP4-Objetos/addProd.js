let arr =[];
let buttonAdd = document.getElementById('agregar').addEventListener('click',() =>{
    let atribs = [...document.querySelectorAll('.prod-input')];
    atribs.forEach((current) =>{
        arr.push(current.value);
        //console.log(current);
    })
    //console.log(atribs);
    
    let prod = new Product(arr[0],arr[1],arr[2]);
    cart.push(prod);
    let body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin','<div class="alert alert-success" role="alert">Creado!!</div>')
   
    console.log(cart);
});