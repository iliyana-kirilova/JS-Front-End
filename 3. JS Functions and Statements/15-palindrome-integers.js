function solve (numbers){
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

    function isPalindrome(number){
        const digits = getDigit(number);

        for(let i=0; i<Math.trunc(digits.length/2); i++){
            if (digits[i]!== digits[digits.length - (i+1)]) return false;
        }

        return true;
    }

    for (const element of numbers) {
        console.log(isPalindrome(element));
    }
}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);