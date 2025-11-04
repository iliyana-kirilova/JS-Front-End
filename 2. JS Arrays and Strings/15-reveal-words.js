/**
 * 
 * @param {string} wordsList 
 * @param {string} text 
 */
function solve(wordsList, text) {
    const words = wordsList.split(", ");
    for (const word of words) {
        const template = "*".repeat(word.length);
        text = text.replace(template, word);
    }

    console.log(text)


}

solve("great", "softuni is ***** place for learning new programming languages");
solve("great, learning", "softuni is ***** place for ******** new programming languages");