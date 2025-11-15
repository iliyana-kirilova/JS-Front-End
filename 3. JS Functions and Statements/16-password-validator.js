/**
 * 
 * @param {string} password 
 */
function solve (password){
    /**
     * 
     * @param {string} password 
     */
    function validate(password){
        const errors =  [];
        if (password.length <6 || password.length>10){
            errors.push("Password must be between 6 and 10 characters");
        }

        let lettersCount =0;
        let digitCount =0;

        for(let i=0; i<password.length;i++){
            if(("a"<=password[i] && password[i]<="z")||("A"<=password[i] && password[i]<="Z")){
                lettersCount++;
            } else if ("0"<=password[i] && password[i]<="9"){
                digitCount++;
            }
        }

        if (lettersCount+digitCount !== password.length){
            errors.push("Password must consist only of letters and digits");
        }

        if (digitCount<2){
            errors.push("Password must have at least 2 digits");
        }

        return errors;
    }

    const validationResult = validate(password);
    if(validationResult.length ===0){
        console.log("Password is valid");
    } else{
        validationResult.forEach((x)=> console.log(x));
    }
}

solve("logIn");
solve("MyPass123");
solve("Pa$s$s");