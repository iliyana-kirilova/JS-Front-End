/**
 * 
 * @param {string} text 
 */

function solve(text){
    const pattern = /#(?<tag>[a-zA-Z]+)/g;

    const matches = text.matchAll(pattern);
    for(const match of matches){
        const current = match.groups.tag;
        console.log(current);
    }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve("The symbol # is known #variously in English-speaking #regions as the #number sign");