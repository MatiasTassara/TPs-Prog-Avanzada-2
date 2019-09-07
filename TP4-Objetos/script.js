
class Product{
    constructor(id,brand,name, price, color){
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.color = color;
    }
    getId(){
        return this.id;
    }
    getBrand(){
        return this.brand;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getColor(){
        return this.color;
    }
    
}

let cart = [];

let products = [new Product(1,'Apple','Iphone X', 55000,'Black'),
                new Product(2,'Samsung','S9', 43000,'Grey'),
                new Product(3,'Huawei', 'P20 pro', 45000,'Blue')];



products.forEach((current) => {
    let prod = document.getElementById('name-'+current.getId());
    prod.textContent = current.getName();
    let price = document.getElementById('price-' + current.getId()); //sacar el precio del objeto no del html
    let id = price.id[price.id.length -1];
    

    price.textContent =  current.getPrice();
    let quant = document.getElementById('quant-'+current.getId());
    quant.value = 0;
    let total = document.getElementById('total-'+current.getId());
    document.getElementById('brand-'+current.getId()).textContent = current.getBrand();
    document.getElementById('color-'+current.getId()).textContent = current.getColor();
    total.textContent = '$ ' + 0;
    price = document.getElementById('price-' + current.getId());
    
    quant.addEventListener('click', () =>{
        total.textContent = '$ ' + quant.value * price.textContent;
        let subTotals = [...document.querySelectorAll('.tot-prod')];
        console.log(subTotals);
        
        subTotals.forEach((cur) =>{
            console.log(cur);
            
        })
        
        document.getElementById('final-payment').textContent = '$' + quant.value * price.textContent;
    });

});



let cartButtons = document.querySelectorAll('.add-cart');
let total = 0;
cartButtons.forEach((currentBtn) => {
    currentBtn.addEventListener('click', () => {
        addTocart();
    });
});

let addTocart = () => {
    console.log('total' + total);
    let quantities = [...document.querySelectorAll('.quant')];
    quantities.forEach((current) =>{
        
        total = parseInt(total) + parseInt(current.value);
    })
    
    
}
//despues sumar el total de dinero de todos los prod. y mostrar abajo en el total;


/*
let prod = products[0];
console.log(prod);
console.log(products);
*/

/*
tBody = document.querySelector('tbody');
tBody.insertAdjacentHTML('afterbegin','<tr><th scope="row"><img src="s9.jpg" alt="" class="img-fluid z-depth-0"  width="200" height="200">'+
                    '</th><td><h5 id="name-2" class="mt-3"><strong></strong></h5><p id="brand-2"class="text-muted">Sony</p>' + 
                    '</td><td id="color-2"></td><td></td><td id="price-2"></td><td>' + 
                    '<input type="number" id="quant-2" value="" aria-label="Search" class="form-control" style="width: 100px" min="0">'+
                    '</td><td id="total-2" class="font-weight-bold"><strong></strong></td><td>' + 
                    '<button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">Add to cart' +
                    '</button></td></tr>');


*/



