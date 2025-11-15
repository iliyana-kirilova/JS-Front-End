function solve(n){
    function getDivisors(){
        const result = [];
        const sqrt = Math.sqrt(n);

        for (let i = 1; i <= sqrt; i++) {
            if(n%i ===0){
                result.push(i);
                result.push(n/i);
            }
        }

        if (sqrt ===Math.trunc(sqrt)) result.push(sqrt);
        return result;
    }

    function sum(array) {
        let sum =0;
        for (const element of array) {
            sum +=element;
        }

        return sum;
    }

    function isPerfect(){
        return 2*n === sum(getDivisors());
    }

    console.log(isPerfect() ? "We have a perfect number!": "It's not so perfect.");
}

solve(6);
solve(28);
solve(1236498);