function solve() {
  //прочитам текста, който потребителя е написал.
  const textToSplit = document.getElementById("input").value;

  //разделям текста на изречения и премахвам празните изречения
  let sentences = textToSplit.split('.').map((s)=>s.trim()).filter(s=> s.length>0);

  let sentenceGroup=[];
  for(let i=0; i<sentences.length; i+=3){
    let currentSentenceGroup = sentences.slice(i, i+3).join(". ")+ '.';
    sentenceGroup.push(currentSentenceGroup);
  }

  //вземам изходното поле
  const outputContainer = document.getElementById("output");

  for(let text of sentenceGroup){
    const paragraph = `<p>${text}</p>`;
    outputContainer.innerHTML +=paragraph;
  }
}