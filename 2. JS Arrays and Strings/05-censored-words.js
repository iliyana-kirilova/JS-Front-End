function solve(sentence, censoredWord) {
    let starTemplate = '*'.repeat(censoredWord.length);
    sentence = sentence.replaceAll(censoredWord, starTemplate);
    console.log(sentence);

    
}

solve ('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');