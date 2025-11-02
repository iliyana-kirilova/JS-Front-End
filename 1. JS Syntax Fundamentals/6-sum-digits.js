function solve(num) {
    let sum = 0;
    while(num !==0){
        const lastDigit = num%10;
        sum +=lastDigit

        //num = Math.trunc(num/=10);
        num = Math.floor(num/=10); // JS не дели целочислено.
    }

    console.log(sum);
    
}

solve (245678);
solve(97561);
solve(543);