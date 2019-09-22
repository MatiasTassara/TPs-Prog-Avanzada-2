document.getElementById('create-btn').addEventListener('click', () => {
    const rows = document.getElementById('quant-rows').value;
    const cols = document.getElementById('quant-cols').value;
    createTable(cols,rows);
});

document.getElementById('quant-rows').addEventListener('keydown', (event) => {
    if(event.keyCode == '38' || event.keyCode == '40'){
        const rows = document.getElementById('quant-rows').value;
        const cols = document.getElementById('quant-cols').value;
        createTable(cols,rows);
    }
})

document.getElementById('quant-cols').addEventListener('keydown', (event) => {
    if(event.keyCode == '38' || event.keyCode == '40'){
        const rows = document.getElementById('quant-rows').value;
        const cols = document.getElementById('quant-cols').value;
        createTable(cols,rows);
    }
})

const createTable = (cols,rows) => {
    if(cols > 0 && rows > 0){
        const table = document.getElementById('table');
        table.innerHTML = '';
        for(let i = 0; i < rows; i++){

            const tr = document.createElement('tr');
            tr.textContent = i;
            for(let j = 0; j < cols; j++){
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            
            table.appendChild(tr);
        }
        
    }
};