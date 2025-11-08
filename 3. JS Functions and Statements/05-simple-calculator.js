function simpleCalc(num1, num2, operator){
    let multiply = (x,y) => x*y;
    let divide = (x,y) => x/y;
    let add= (x,y) => x+y;
    let subtract = (x,y) => x-y;

    switch(operator){
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
    }
}

simpleCalc(5,5,'multiply');
simpleCalc(40,8,'divide');
simpleCalc(12,19,'add');
simpleCalc(50,13,'subtract');