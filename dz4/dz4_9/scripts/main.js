function arrObj(clients) {
    for (const client of clients) {
        document.write(
            `
                <div>${client.id} ${client.name} ${client.age}
                </div>
            `
        )
    }
}

arrObj([
    {id: 4, name: 'wef', age: 45},
    {id: 77, name: 'wef', age: 45},
    {id: 21, name: 'wef', age: 45},
    {id: 7, name: 'wef', age: 45},
    {id: 9, name: 'wef', age: 45}])