function solve(a, b, c) {
    // const smallest = Math.min(a, b, c);
    // console.log(smallest);

    /**
     * 
     * @param {Array} array 
     */
    function findMin(array){
        let min = Number.MAX_VALUE;
        for (const element of array){
            if (element<min) min = element;
        }

        return min;
    }

    const numbers = [a,b,c];
    console.log(findMin(numbers));
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
solve(2, 2, 2);