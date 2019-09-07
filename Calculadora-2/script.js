
let calculator = {
    number1: 0,
    operand: ''
}

let getNumber = () => {
    let a = document.getElementById('numero1').value;
    if(parseFloat(a) == a){ //ver si es numero
        a = parseFloat(a);  
        calculator.number1 = a;     
        return a
    }else{
        return null;
    }
}


document.getElementById('sum').addEventListener('click',() => {
    let box = document.getElementById('numero1');
    const a = getNumber();
    box.value = '';
    calculator.operand = '+';
    box.focus();
    //a !== null ? res.value = a + b : res.value = 'Solo numeros please!';
});

document.getElementById('equals').addEventListener('click',  () => {
    let box = document.getElementById('numero1');
    if(calculator.operand === '+'){
        box.value = parseFloat(box.value) + parseFloat(calculator.number1);
        calculator.number1 = box.value;
   }else if(calculator.operand === '-'){
        box.value =  parseFloat(calculator.number1) - parseFloat(box.value);
        calculator.number1 = box.value;    
   }else if(calculator.operand === '*'){
        box.value =  parseFloat(calculator.number1) * parseFloat(box.value);
        calculator.number1 = box.value;    
    }else{
        box.value =  parseFloat(calculator.number1) / parseFloat(box.value);
        calculator.number1 = box.value;  
    }
    //a !== null ? res.value = a - b : res.value = 'Solo numeros please!';
});

document.getElementById('sub').addEventListener('click',  () => {
    let box = document.getElementById('numero1');
    const a = getNumber();
    box.value = '';
    calculator.operand = '-';
    box.focus();
    //a !== null ? res.value = a - b : res.value = 'Solo numeros please!';
});

document.getElementById('mult').addEventListener('click',() => {
    let box = document.getElementById('numero1');
    const a = getNumber();
    box.value = '';
    calculator.operand = '*';
    box.focus();
    //a !== null ? res.value = a * b : res.value = 'Solo numeros please!';
});

document.getElementById('divi').addEventListener('click',() => {
    let box = document.getElementById('numero1');
    const a = getNumber();
    box.value = '';
    calculator.operand = '/';
    box.focus();
    /*b !== 0 ? r.value = a / b : r.value = 'Error div por 0!';
    if(a === null){
        r.value = 'Solo Numeros please!';
    }*/
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('numero1').value = '';
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('number')) {
        let num = document.getElementById('numero1').value + event.target.textContent
        num = num.replace(/ /g, '');
        console.log(num);
        document.getElementById('numero1').value = parseFloat(num);
        
    }
});
/*
document.getElementById('sum').addEventListener('click', () =>{
    document.getElementById('numero2').focus();
});
*/
document.addEventListener('keypress',function(e){
    console.log(e.key);
    
})



//document.addEventListener('keypress', logKey)


/*
let keys = document.querySelectorAll('.number');
for(var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click',function(){
        let num = parseFloat(this.keys[i].innerHTML);
        document.getElementById('numero1').value = num;
    });
  }

*/
document.getElementById('numero1').focus();


