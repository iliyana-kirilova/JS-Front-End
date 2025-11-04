function solve(arr) {
    arr.sort((a, b) => a - b);

    const result = [];
    let currentElement;
    while (arr.length > 0) {
        result.push(arr.shift()); 
        if (arr.length > 0) {
            result.push(arr.pop());
        }
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);