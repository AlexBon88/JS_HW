function arrUl(any, quantity) {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(
            `
            <li>${any}</li>
            `
        )
    }
    document.write(`</ul>`)

}