
const users = document.forms.users;
const output = document.getElementById('output');
users.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nValue = users.name.value;
    const surnValue = users.surname.value;
    const aValue = users.age.value;
    let obj = {name:nValue, surname:surnValue, age:aValue};
    output.textContent = obj.name + ' ' + obj.surname + ' ' + obj.age;

})
