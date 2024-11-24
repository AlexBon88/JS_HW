function addToLocalStorage(arrayName, objToAdd) {
    const mas = JSON.parse(localStorage.getItem(arrayName));
    mas.push(objToAdd);
    const stringMas = JSON.stringify(mas);
    localStorage.setItem(arrayName, stringMas);
}