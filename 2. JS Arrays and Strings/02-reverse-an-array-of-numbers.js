function reverseArray(n, input) {
    let reverseArr = input.slice(0, n).reverse();
    console.log(reverseArr.join(' '));
    
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);