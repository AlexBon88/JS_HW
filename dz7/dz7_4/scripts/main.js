
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone =phone;
    this.order =order
}
let clients = [
    new Client(6, 'Vasyl', 'Burdenyuk', 'burd1208@gmail.com', '+380965557815', ['vacuum cleaner', 'kettle', 'iron', 'coffee']),
    new Client(2, 'Oleg', 'Pirogov', 'pirogov@ukr.net', '+380674581247', ['phone', 'tv', 'notebook', 'coffee']),
    new Client(5, 'Oleksandr', 'Bonakhov', 'bonakhov@meta.ua', '+380971285899',['tea']),
    new Client(10, 'Andriy', 'Oliynyk', 'oliynyk@gmail.com', '+380975776822', ['food', 'cola', 'mobile']),
    new Client(7, 'Olga', 'Prytulyak', 'olga@ukr.net', '+380671214589', ['mobile', 'tv', 'tablet']),
    new Client(3, 'Nataliya', 'Klymenko', 'klymenko@mail.ua', '+380930015471', ['shoes', 'blackberry', 'socks', 'drum', 'pizza']),
    new Client(8, 'Kateryna', 'Dera', 'dera@meta.ua', '+380992245587', ['piano', 'pipe']),
    new Client(1, 'Ivan', 'Golovko', 'golovko@gmail.com', '+380961472014', ['cello', 'guitar', 'coffee']),
    new Client(4, 'Margarita', 'Nazaruk', 'nazaruk@tinder.com', '+380508544525', ['crutch', 'wheelchair']),
    new Client(9, 'Petro', 'Zhus', 'zhus@xxx.ua', '+380775472521', ['ball']),
]
console.log(clients);