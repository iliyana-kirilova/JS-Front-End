function evenOddSum(input){
    let evenNumber = 0;
    let oddNumber = 0;

    for (let number of input) {
        if (number%2===0){
            evenNumber+=number;
        }else{
            oddNumber+=number;
        }
    }

    console.log(evenNumber-oddNumber);
}

evenOddSum([1,2,3,4,5,6]);
evenOddSum([3,5,7,9]);
evenOddSum([2,4,6,8,10]);