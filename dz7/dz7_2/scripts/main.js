function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Ivan', 'Golovko', 'golovko@gmail.com', '+380961472014'),
    new User(2, 'Oleg', 'Pirogov', 'pirogov@ukr.net', '+380674581247'),
    new User(3, 'Nataliya', 'Klymenko', 'klymenko@mail.ua', '+380930015471'),
    new User(4, 'Margarita', 'Nazaruk', 'nazaruk@tinder.com', '+380508544525'),
    new User(5, 'Oleksandr', 'Bonakhov', 'bonakhov@meta.ua', '+380971285899'),
    new User(6, 'Vasyl', 'Burdenyuk', 'burd1208@gmail.com', '+380965557815'),
    new User(7, 'Olga', 'Prytulyak', 'olga@ukr.net', '+380671214589'),
    new User(8, 'Kateryna', 'Dera', 'dera@meta.ua', '+380992245587'),
    new User(9, 'Petro', 'Zhus', 'zhus@xxx.ua', '+380775472521'),
    new User(10, 'Andriy', 'Oliynyk', 'oliynyk@gmail.com', '+380975776822'),
]
function filterUsers(user) {
return  user.id % 2 === 0
}

console.log(users.filter(filterUsers));