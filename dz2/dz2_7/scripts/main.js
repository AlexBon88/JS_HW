let time = +prompt('Enter number from 0 to 59');
if (time >= 0 && time <= 15) {
    console.log('1 quarter');
} else
if (time > 15 && time <= 30) {
    console.log('2 quarter');
} else
if (time > 30 && time <= 45) {
    console.log('3 quarter');
} else
if (time > 45 && time <= 59) {
    console.log('4 quarter')
} else {
    console.log('????')
}