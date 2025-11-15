function solve (percentage){
    function repeat(character, count){
        return Array.from({length: count}, ()=> character).join("");
    }

    function getVisualStatus (completedParts, emptyParts){
        return `[${repeat("%", completedParts)}${repeat(".", emptyParts)}]`;
    }

    const done = percentage/10;

    if(done<10){
        console.log(`${percentage}% ${getVisualStatus(done, 10-done)}`);
        console.log("Still loading...");
    } else{
        console.log(`${percentage}% Complete!`);
        console.log(getVisualStatus(done,0));
    }
}

solve(30);
solve(50);
solve(100);