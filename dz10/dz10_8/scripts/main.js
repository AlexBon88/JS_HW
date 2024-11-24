const grid = document.forms.grid;
const output = document.getElementById('output');
const get = document.getElementById('get');
get.addEventListener('click', function () {
    output.innerText = '';
    const valueLine = +grid.line.value;
    const valueCell = +grid.cell.value;
    const valueText = grid.text.value;
    console.log(valueLine, valueCell, valueText);
    for (let i = 0; i < valueLine; i++) {
       const line = document.createElement('tr');
        for (let j = 0; j < valueCell; j++) {
            const cell = document.createElement('td');
            cell.innerText = valueText;
            line.appendChild(cell)
        }
       output.appendChild(line);
    }
})


