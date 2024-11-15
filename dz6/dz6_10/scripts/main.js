const suits = ['spade','diamond','heart','club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red'
        } else {
            card.color = 'black'}
        cards.push(card)
    }
}
const reduce = cards.reduce((previous, card) => {
    switch (card.cardSuit) {
        case 'spade':
            previous.spades.push(card);
            break;
        case 'diamond':
            previous.diamonds.push(card);
            break;
        case 'heart':
            previous.hearts.push(card);
            break;
        case 'club':
            previous.clubs.push(card);
            break;
    }
return previous;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce);