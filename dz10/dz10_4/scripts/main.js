let num = +localStorage.getItem('number');
num += 1;
localStorage.setItem('number', num);
const output = document.getElementById('output');
output.textContent = num;

