function solve (a,b){
    // function factorial(n){
    //    if (n===0 || n===1) return 1;
    //    return n*factorial(n-1);
    // }

    function factorial(n){
        let result =1;
        for(let i=2; i<=n; i++){
            result *=i;
        }

        return result;
    }

    const result = factorial(a)/factorial(b);
    console.log(result.toFixed(2));
}

solve(5,2);
solve(6,2);