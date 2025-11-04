/**
 * 
 * @param {string} word 
 * @param {string} text 
 */

function solve(word, text) {
    //const pattern = new RegExp(`\\b${word}\\b`, "i"); - интерполация с регекс
    const allWords = text.split(/[\s,.!?;:]+/);
    if(allWords.find((x)=> x.toLowerCase()=== word.toLowerCase())){
        console.log(word);
    } else{
        console.log(`${word} not found!`);
        
    }
}

solve("javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");