function exchange(sumUAN, currencyValues, exchangeCurrency) {
    let chosenCurrency;

    for (const stand of currencyValues) {
        if (stand.currency === exchangeCurrency) {
            chosenCurrency = stand;
        }

    }
    let finite = sumUAN/chosenCurrency.value;

    return finite;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'))