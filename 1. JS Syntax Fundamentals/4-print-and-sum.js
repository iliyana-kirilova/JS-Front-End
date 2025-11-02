function solve(start, end) {

    let sum=0;
    let sequence = "";
    for (let i= start; i<= end; i++) {
        sequence+= `${i} `;
        sum+=i;
    }
    
    console.log(sequence);
    console.log(`Sum: ${sum}`);
    
}

solve(5,10);
solve(0,26);
solve(50,60);
