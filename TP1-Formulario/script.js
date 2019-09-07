
//regex101

let checkObj = {
    name: false,
    surname: false,
    age: true,
    pass: false,
    mail: false
}

let domains =['google.com', 'outlook.com', 'icloud.com'];

let name = document.getElementById('name');
name.focus();
let surname = document.getElementById('surname');
let age = document.getElementById('age');
let pass = document.getElementById('pass');
let mail = document.getElementById('mail');
let labelName = document.getElementById('label-name');
let labelSurname = document.getElementById('label-surname');
let labelAge = document.getElementById('label-age');
let labelPass = document.getElementById('label-pass');
let labelMail = document.getElementById('label-mail');



name.addEventListener('keyup', () =>{
    
    //labelName.textContent = 'Name'
    if(name.value === ''){
        labelName.classList.remove('check')
        labelName.textContent = 'Name - No puede estar vacio';
        checkObj.name = false;
        checkValidations();
    }else if(name.value.length > 20){
        labelName.classList.remove('check')
        labelName.textContent = 'Name - No puede exceder los 20 caracteres';
        checkObj.name = false;
        checkValidations();
    }else if(!(/^[a-zA-Z\s]*$/.test(name.value))){
        labelName.classList.remove('check')
        labelName.textContent = 'Name - No puede usar caracteres especiales';
        checkObj.name = false;
        checkValidations();
    }else{
        labelName.classList.add('check');
        labelName.textContent = '';
        //labelName.innerHTML = 'Name  '+ '   ' + '<div class="check"></div>' 
        checkObj.name = true;
        checkValidations();
    }
});


surname.addEventListener('keyup', () =>{
    
    labelSurname.textContent = 'Surname'
    if(surname.value === ''){
        labelSurname.classList.remove('check');
        labelSurname.textContent = 'Surname - No puede estar vacio';
        checkObj.surname = false;
        checkValidations();
    }else if(surname.value.length > 20){
        labelSurname.classList.remove('check');
        labelSurname.textContent = 'Surname - Maximo 20 caracteres';
        checkObj.surname = false;
        checkValidations();
    }else if(!(/^[a-zA-Z\s]*$/.test(surname.value))){
        labelSurname.classList.remove('check');
        labelSurname.textContent = 'Surname - No caracteres especiales';
        checkObj.surname = false;
        checkValidations();
    }else{
        labelSurname.classList.add('check');
        labelSurname.textContent = '';
        checkObj.surname = true;
        checkValidations();
    }
});

age.addEventListener('keyup', () =>{
    if(age.value === ''){
        labelAge.classList.remove('check')
        labelAge.innerHTML = 'Age (opcional)&#10004';
        checkObj.age = true;
        checkValidations();
    }else if(parseInt(age.value) != age.value){
        labelAge.innerHTML = 'Age - La edad debe ser un numero';
        checkObj.age = false;
        checkValidations();
    }else{
        labelAge.classList.add('check');
        labelAge.textContent = '';
        checkObj.age = true;
        checkValidations();
    }
});

pass.addEventListener('keyup', () => {
    if((pass.value.length < 9) || (pass.value.length > 20)){
        labelPass.classList.remove('check');
        labelPass.textContent = 'Pass debe ser entre 9 y 20 car.';
        checkObj.pass = false;
        checkValidations();
    }else if( !(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/).test(pass.value)){
        labelPass.classList.remove('check');
        labelPass.textContent = 'Debe haber al menos 1 mayusc,1 minusc y 1 numero';
        checkObj.pass = false;
        checkValidations();
    }else{
        labelPass.classList.add('check');
        labelPass.textContent = '';
        checkObj.pass = true;
        checkValidations();
    }
});

mail.addEventListener('keyup', () => {
   
    domains.forEach((value) =>{
        console.log(value.endsWith('google.com'));
        console.log(value.endsWith('outlook.com'));
        console.log(value.endsWith('icloud.com'));
        
        if((/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/).test(mail.value)){
            labelMail.classList.remove('check');
            labelMail.textContent = 'Formato de mail invalido';
            checkObj.mail = false;
            checkValidations();
        }
        else if(mail.value.endsWith(value)){
            labelMail.classList.add('check');
            labelMail.textContent = '';
            checkObj.mail = true;
            checkValidations();
        }
    })
})

function checkValidations(){
    let buttonHTML;
    var button = document.getElementById('button-sub');
    let buttonContainer = document.querySelector('.container-button');
    if(checkObj.name && checkObj.surname && checkObj.age && checkObj.pass){
        if(!button){
            buttonHTML = '<button type="submit" id="button-sub" onClick = "validated()" style="display:block;" "> Submit </button>';
            buttonContainer.insertAdjacentHTML('beforeend', buttonHTML);
            /*
            buttonHTML = document.createElement('button');
            buttonHTML.id = 'button-sub';
            buttonHTML.innerHTML = 'Validar';
            buttonHTML.type = 'submit';
            
            buttonContainer.insertAdjacentElement("beforeend",buttonHTML);
            buttons.addEventListener('click', () => alert('Validacion OK!'));
            */
        }
    
    }else{
        if(button){
            button.parentNode.removeChild(button);
        }
    }

}


function validated(){
    alert('Todo validado OK!');
}


