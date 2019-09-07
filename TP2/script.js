
let body = document.querySelector('body');

let button1 = document.createElement('button');
button1.id = 'button1';
button1.textContent = 'Class myId';
body.insertAdjacentElement('afterbegin',button1);

let button2 = document.createElement('button');
button2.id = 'button2';
button2.textContent = 'Clase test';
body.insertAdjacentElement('afterbegin',button2);


button1.addEventListener('click', () =>{
    let p = document.getElementById('myId');
    if(p.innerHTML.length > 0){
        p.innerHTML = '';
    }else{
        p.innerHTML = 'Hello World!';
    }
});

button2.addEventListener('click', () => {
    let p = document.getElementsByClassName('test')[0];
    if(p.innerHTML.length > 0){
        p.innerHTML = '';
    }else{
        p.innerHTML = 'Hello World!';
    }
});

let num = 0;
let table = document.querySelector('.myTable');
let insertRow = () =>{
    let row = table.insertRow(-1);
    let c1 = row.insertCell(-1);
    let c2 = row.insertCell(-1);
    c1.innerHTML = 'celda ' + ++num;
    c2.innerHTML = 'celda ' + num;
    c1.style = 'text-align: center';
    c2.style = 'text-align: center';
    console.log(table.rows.length);
    
};

let deleteRow = () =>{
    if(table.rows.length > 1){
        table.deleteRow(table.rows.length -1);
        num--;
        console.log(table.rows.length);
    }
}

let highlight = () =>{
    let button = document.getElementById('high-button');
    let textList = [...document.querySelectorAll('.myClass')];
    //textList = Array.from(document.querySelectorAll('.myClass'));
    if(button.value === 'Highlight words'){
        textList.forEach(element => {
            element.style.background = 'yellow';
        });
        button.value = 'Unhighlight';
    }else{
        console.log(button);
        textList.forEach(element => {
            element.style.background = 'none';
        });
        button.value = 'Highlight words';
    }
    
}


