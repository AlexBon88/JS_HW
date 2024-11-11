function arrLi(arraylist) {
    document.write(`<ul>`);
    for (const checkpoint of arraylist) {
        document.write(`<li>${checkpoint}</li>`)
    }
    document.write(`</ul>`);
}
arrLi([1,-5,8,true,'dsse'])