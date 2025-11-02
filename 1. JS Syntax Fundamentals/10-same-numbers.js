function solve(num) {
    let sum = 0;
    let allDigitsAreEqual = true;

    const targetDigit = num%10;
    while(num !==0){
        const lastDigit = num%10;
        sum +=lastDigit;

        if(lastDigit!== targetDigit) allDigitsAreEqual =false;
        num = Math.floor(num/=10);
    }

    console.log(allDigitsAreEqual);
    console.log(sum);
    
}

solve(2222222);
solve(1234);