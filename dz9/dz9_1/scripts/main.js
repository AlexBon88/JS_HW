const block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
document.body.appendChild(block);
const block2 = block.cloneNode(true);
document.body.appendChild(block2);''