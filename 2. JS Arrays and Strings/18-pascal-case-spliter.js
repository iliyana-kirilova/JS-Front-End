/**
 * 
 * @param {string} text 
 */
function solve(text) {
    const splitPattern = /(?=[A-Z])/;
    const words = text.split(splitPattern);
    console.log(words.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");