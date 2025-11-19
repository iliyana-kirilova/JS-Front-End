function solve(input){
    const requestedWords = input[0].split(" ");

    const map ={};
    requestedWords.forEach((word)=>{
        map[word] =0;
    });

    for(let i=1; i<input.length;i++){
        if(map.hasOwnProperty(input[i])){
            map[input[i]]++;
        }
    }

    for (const [word, count] of Object.entries(map).sort((a, b) => b[1] - a[1])){
        console.log(`${word} - ${count}`);
    } 
}

solve(["this sentence", "In", "this", "sentence", "you", "have", "to", "count", "the", "occurances", "of", "the", "words", "this", "and", "sentence", "because", "this", "is", "your", "task"]);
solve(["is the", "first", "sentence", "Here", "is", "another", "the", "And", "finally", "the", "the", "sentence"]);