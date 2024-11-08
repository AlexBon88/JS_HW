let day = +prompt('Enter number from 1 to 31');
if (day > 0 && day <= 10) {
    console.log('1 decade');
} else if (day > 10 && day <= 20) {
    console.log('2 decade');
} else if (day > 20 && day <= 31) {
    console.log('3 decade');
}