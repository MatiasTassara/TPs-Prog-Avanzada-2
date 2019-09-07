let getNumbers = () => {
    let a = document.getElementById('numero1').value;
    let b =document.getElementById('numero2').value;
    if(parseFloat(a) == a && parseFloat(b) == b){
        a = parseFloat(a);
        b = parseFloat(b);        
        return [a,b]
    }else{
        return [null];
    }
}

document.getElementById('sum').addEventListener('click',() => {
    const [a,b] = getNumbers();
    let res =  document.getElementById('numero3');
    a !== null ? res.value = a + b : res.value = 'Solo numeros please!';
});

document.getElementById('sub').addEventListener('click',  () => {
    const [a,b] = getNumbers();
    let res =  document.getElementById('numero3');
    a !== null ? res.value = a - b : res.value = 'Solo numeros please!';
});

document.getElementById('mult').addEventListener('click',() => {
    const [a,b] = getNumbers();
    let res =  document.getElementById('numero3');
    a !== null ? res.value = a * b : res.value = 'Solo numeros please!';
});

document.getElementById('divi').addEventListener('click',() => {
    const [a,b] = getNumbers();
    let r = document.getElementById('numero3');
    b !== 0 ? r.value = a / b : r.value = 'Error div por 0!';
    if(a === null){
        r.value = 'Solo Numeros please!';
    }
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('numero3').value = '';
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




