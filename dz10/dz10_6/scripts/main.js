const kg = document.getElementById('kg');
let lbOutput = document.getElementById('lb');
kg.addEventListener('input', function () {
    const value = +this.value;
    let lb = value * 2.2;
    lbOutput.innerText = lb;
})
