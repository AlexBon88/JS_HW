if (!localStorage.getItem('number')) {
    localStorage.setItem('number', 90)
}
let num = +localStorage.getItem('number');

num += 10;
localStorage.setItem('number', num);
const output = document.getElementById('output');
output.textContent = num;