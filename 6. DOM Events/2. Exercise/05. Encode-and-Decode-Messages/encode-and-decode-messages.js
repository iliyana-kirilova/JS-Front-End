document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //взимам  теьтареа и бутоните
    const encodeTextarea = document.querySelector("form#encode textarea");
    const encodeBtn = document.querySelector("form#encode button");

    const decodeTextarea = document.querySelector("form#decode textarea");
    const decodeBtn = document.querySelector("form#decode button");

    //закачам слушател на бутона за кодиране
    encodeBtn.addEventListener('click', handleEncode);
    function handleEncode(event){
        event.preventDefault();

        //вземам си стойността на текста и създавам променлива, където ще държа кодирания текст
        const text = encodeTextarea.value;
        let encodedText ='';
        //обхождам всеки символ от текста и кодирам, по ASCII + 1
        for(let char of text){
            encodedText +=String.fromCharCode(char.charCodeAt(0) + 1);
        }

        //записвам текста в полето за декодиране и зачисвам
        decodeTextarea.value = encodedText;
        encodeTextarea.value = '';
    }

    //закачам слушател на бутона за декодиране
    decodeBtn.addEventListener('click', function(event){
        event.preventDefault();

        const text = decodeTextarea.value;
        let decodedText = '';
        //обхождам всеки символ от текста и кодирам, по ASCII - 1
        for(let char of text){
            decodedText +=String.fromCharCode(char.charCodeAt(0) - 1);
        }

        decodeTextarea.value = decodedText;
    });


}