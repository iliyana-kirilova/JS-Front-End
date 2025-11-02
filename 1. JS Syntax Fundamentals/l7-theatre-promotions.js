function solve(typeOfDay, age) {
    let ticketPrice;
    switch (typeOfDay) {
        case "Weekday":
            if(age>=0 && age<= 18){
                ticketPrice = 12;
            }else if (age>=19 && age<= 64){
                ticketPrice = 18;
            }else if (age>=65 && age<= 122){
                ticketPrice = 12;
            }else{
                return console.log("Error!");
            }
            break;
        case "Weekend":
            if(age>=0 && age<= 18){
                ticketPrice = 15;
            }else if (age>=19 && age<= 64){
                ticketPrice = 20;
            }else if (age>=65 && age<= 122){
                ticketPrice = 15;
            }else{
                return console.log("Error!");
            }
            break;
        case "Holiday":
            if(age>=0 && age<= 18){
                ticketPrice = 5;
            }else if (age>=19 && age<= 64){
                ticketPrice = 12;
            }else if (age>=65 && age<= 122){
                ticketPrice = 10;
            }else{
                return console.log("Error!");
            }
            break;
    }

    console.log(`${ticketPrice}$`);
    
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);