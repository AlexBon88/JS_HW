let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    const block = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    const p = document.createElement('p');
    p.innerText = course.monthDuration;
    block.appendChild(h2);
    block.appendChild(p);
    document.body.appendChild(block);
}''