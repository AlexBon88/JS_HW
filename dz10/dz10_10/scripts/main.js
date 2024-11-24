const objects = Array.from({length: 100}, (i, k) => k);
const page = 10;
let current = 1;
const listObj = document.getElementById('listObj');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
function reproduce() {
    listObj.innerHTML = '';
    const start = (current - 1) * page;
    const end = current * page;
    const curObj = objects.slice(start, end);

    curObj.forEach(obj => {
        const div = document.createElement('div');
        div.textContent = obj;
        listObj.appendChild(div);
    });
}
prev.addEventListener('click', () => {
    if (current > 1) {
        current--;
        reproduce();
    }
})
next.addEventListener('click', () =>{
    if (current < (objects.length / page)) {
        current++;
        reproduce();
    }
})
reproduce();






