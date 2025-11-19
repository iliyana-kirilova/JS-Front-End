function solve(input){
    let parking={};
    for(const el of input){
        const[direction, carNumber] = el.split(", ");

        if(direction ==="IN") parking[carNumber] = true;
        else if (direction ==="OUT") delete parking[carNumber]; //parking[carNumber]=fals;
    }

    const output = Object.keys(parking);//.filter((c)=> parking[c])
    if (output.length===0) console.log("Parking Lot is Empty");
    else{
        output.sort();
        for (const carNumber of output) console.log(carNumber);
    }
}

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "IN, CA9999TT", "IN, CA2866HI", "OUT, CA1234TA", "IN, CA2844AA", "OUT, CA2866HI", "IN, CA9876HH", "IN, CA2822UU"]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);