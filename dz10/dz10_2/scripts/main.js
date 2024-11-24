const userAge = document.forms.userAge;
const output = document.getElementById('output');
userAge.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const ageInput = userAge.age.value;
    if (ageInput>=18) {
        output.textContent = 'WELCOME TO MY SITE'
    } else {
        output.textContent = 'NO ENTER TO MY SITE'
    }

})