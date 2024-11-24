let mass = ['Main','Products','About us','Contacts'];
const list = document.createElement('ul');
for (const element of mass) {
const part = document.createElement('li');
part.textContent = element;
list.appendChild(part);
}
document.body.appendChild(list);