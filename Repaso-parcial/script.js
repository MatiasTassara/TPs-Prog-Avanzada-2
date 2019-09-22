console.log('------PUNTO1-----------');


const deleteDuplicates = function(arr){
    const set = new Set(arr);
    return Array.from(set);
};

const eliminateDuplicates = function(arr){
    let cleanArr = [];
    arr.forEach((value) => {
        if(!cleanArr.includes(value)){
            cleanArr.push(value);
        }
    })
    return cleanArr;
};

const numbers = [3,4,5,2,4,1,2,8,7,8,6,1];
const cleanArray = deleteDuplicates(numbers);
console.log(numbers);
console.log(cleanArray);

const cleanedArray = eliminateDuplicates(numbers);
console.log('-------------------')
console.log(numbers);
console.log(cleanedArray);

function arrayCalc(arr, fun){
    let arrRes = [];
    arr.forEach(element => {
       arrRes.push(fun(element)); 
    });
    return arrRes;
};

const isBiciesto = function(year){
    if((year % 4 === 0 && year %100 !== 0) ||  year % 400 === 0){
        return true;
    }
    return  false;
};
console.log('------PUNTO 2----------');

const years = [1990,2010,1934,1988,1976];
const areOrNot = arrayCalc(years,isBiciesto);
console.log(years);
console.log(areOrNot);

console.log('------PUNTO 3---------')

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona('jose','perez',33);
const persona2 = new Persona('mario','gomez',23);
const persona3 = new Persona('carlos','sanchez',44);
const persona4 = new Persona('alberto','lopez',20);
const persona5 = new Persona('tito','alvarez',21);
let arrPersonas = [];
arrPersonas.push(persona1,persona2,persona3,persona4,persona5);

console.log(arrPersonas);
arrPersonas.sort((a,b) => a.edad - b.edad);
console.log(arrPersonas);

console.log('----PUNTO 4---------')

class Item{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    };

    toString(){
      return 'nombre: ' + this.nombre + ' - precio: ' + this.precio;  
    };
}

const carrito = {
    items: [],
    calcTotal: function(){
        const total = this.items.reduce((acum,current) => acum + current.precio,0);
        return total;
    }
}

const item1 = new Item('celular',100);
const item2 = new Item('camara',230);
const item3 = new Item('auto',13000);
const item4 = new Item('bicicleta',3400);

carrito.items.push(item1,item2,item3,item4);


console.log(carrito);

const total = carrito.calcTotal();
console.log(total);

console.log('------PUNTO5---------');

const getFormvalue = () => {
    const body = document.querySelector('body');
    const firstName = Array.from(document.getElementsByName('fname'));
    const lastName = Array.from(document.getElementsByName('lname'));
    if(firstName[0].value.length > 0 && lastName[0].value.length > 0){
        //body.insertAdjacentHTML('beforeend', 'Form validado');
        document.write('Form validado')
    }else{
        body.insertAdjacentHTML('beforeend', 'Form vacio invalido');
        //document.write('Form no validado')
    }
}