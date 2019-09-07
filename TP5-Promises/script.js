/*
//devuelve todos los registros 
const getAll = () => {
    fetch('https://utn-2019-avanzada2-tp5.herokuapp.com/records')
    .then(result =>{
        return result.json();
    })
    .then(result =>{
        insertRows(result);
    })
    .catch(error => console.log(error));
};


//devuelve total de registros (1000)
const getAllTotal = () => {
    fetch('https://utn-2019-avanzada2-tp5.herokuapp.com/records/total')
    .then(result =>{
        return result.json();
    })
    .then(result =>{
        console.log(result);
    })
    .catch(error => console.log(error));
};

*/

/**
 * Se deberá consumir el siguiente servicio web (Código Fuente)
○ https://utn-2019-avanzada2-tp5.herokuapp.com/
○ Del cual se conocen los siguientes endpoints:
■ GET /records
■ GET /records?from=0&to=1
■ GET /records/total
 */

/********************************************************* */
 /////////////// FETCH VERSION ////////////////////////////
/******************************************************** */ 

var from = 0;
var to = 10;

const getAllInPages = () => {
    fetch(`https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=${from}&to=${to}`)
    .then(result =>{
        //console.log(result);
        return result.json();
    })
    .then(result =>{
        insertRows(result);
    })
    .catch(error => console.log(error));
};

/********************************************* */
/////////////////////  XHR VERSION ///////////
/******************************************** */

const getAllInPagesXHR = () =>{
    return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET',`https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=${from}&to=${to}`);
    request.responseType = 'json'
    request.onload = () => {
        if(request.status == 200){
            resolve(request.response);
        }else{
            reject(Error('Error consuming API') + request.statusText);
        }
    }
    request.send();
    });
}

function getApiXHR(){
    getAllInPagesXHR()
    .then(response => {
        insertRows(response);
    })
    .catch(reason => console.log(Error(reason)));
};
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

document.getElementById('next-button').addEventListener('click',() =>{
    if(to < 100){
        from += 10;
        to +=10;
        document.querySelector('tbody').innerHTML = '';
        getAllInPages();
    }
});
document.getElementById('prev-button').addEventListener('click',() =>{
    if(from > 0){
        from -= 10;
        to -=10;
        document.querySelector('tbody').innerHTML = '';
        getAllInPages();
        
    }
});


const insertRows = (allUsers) => {

    allUsers.forEach(element => {
        
        const table = document.getElementById('table-body');
        const number = document.createElement('td');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const eMail = document.createElement('td');
        const gender = document.createElement('td');
        const lastIp = document.createElement('td');
        const tr = document.createElement('tr');
        number.textContent = element.id;
        firstName.textContent = element.first_name;
        lastName.textContent = element.last_name;
        gender.textContent = element.gender;
        eMail.textContent = element.email;
        lastIp.textContent = element.last_connected_ip;
        table.appendChild(tr);
        tr.appendChild(number);
        tr.appendChild(firstName);
        tr.appendChild(lastName);
        tr.appendChild(gender);
        tr.appendChild(eMail);
        tr.appendChild(lastIp);
    });
};

getAllInPages();
//getApiXHR();
