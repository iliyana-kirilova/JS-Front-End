/**
 * 
 * @param {number} char1 
 * @param {number} char2 
 * @param {string} first
 * @param {string} second  
 */

function solve(first, second){

    function getCharactersBetween(from, to){
        const result = [];
        for(let i=from+1; i<to; i++){
            result.push(String.fromCodePoint(i));
        }

        return result.join(" ");
    }

    const char1 = first.codePointAt(0);
    const char2 = second.codePointAt(0);

    let output;
    if (char1<char2) output = getCharactersBetween(char1, char2);
    else output = getCharactersBetween(char2, char1);
    console.log(output);
}

solve("a", "d");
solve("#", ":");
solve("C", "#");