let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (const key of listOfItems) {
    document.write(
  `     
            <li>${key}</li>
    `
    );

}
document.write(`</ul>`)