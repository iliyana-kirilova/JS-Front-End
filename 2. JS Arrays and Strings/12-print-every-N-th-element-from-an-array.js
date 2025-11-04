function solve(arr, step) {
    const resultArray = [];
    for(let i = 0; i<arr.length; i+=step){
        resultArray.push(arr[i]);
    }
    
    return resultArray;
}

solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa','asd', 'test', 'tset'], 2);
solve(['1', '2','3', '4', '5'], );
