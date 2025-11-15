function solve (number){
    function getDigit(number){
        const result = [];
        do{
            const digit = number % 10;
            result.push(digit);

            number = (number - digit)/10;
        } while (number !==0);

        result.reverse();
        return result;
    }

    const digits = getDigit(number);
    let evenSum =0;
    let oddSum = 0;

    for (const element of digits){
        if(element %2 ===0) evenSum+=element;
        else oddSum+=element;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);