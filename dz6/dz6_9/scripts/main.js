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
cards.find(card => card.value === 'ace' && card.cardSuit === 'club');
cards.filter(card => card.value === '6');
cards.filter(card => card.color === 'red');
cards.filter(card=>card.cardSuit === 'diamond');
cards.filter(card => card.cardSuit === 'spade' && (card.value !== '6' && card.value !== '7' && card.value !== '8'));
