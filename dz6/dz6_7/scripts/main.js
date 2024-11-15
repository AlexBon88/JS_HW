function sortNums(numbers, direction) {
    if (direction === 'ascending') {
        return numbers.sort((a, b) => a - b);
    } if (direction === 'descending') {
        return numbers.sort((a, b) => b - a);
    }
}

console.log(sortNums([4, -8, 17], 'descending'));