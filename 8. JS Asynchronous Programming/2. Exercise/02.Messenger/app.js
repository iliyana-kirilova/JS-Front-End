function attachEvents() {
    const messageUrl = "http://localhost:3030/jsonstore/messenger"

    const refreshButton = document.getElementById("refresh");
    const messagesPane = document.getElementById("messages");
    const authorInput = document.querySelector("div#controls>input[name='author']");
    const contentInput = document.querySelector("div#controls>input[name='content']");
    const submitButton = document.getElementById("submit");
    
    async function refresh(){
        const getMessagesResponse = await fetch(messageUrl);
        const messages = await getMessagesResponse.json();

        messagesPane.textContent = "";
        for(const message of Object.values(messages)){
            if(messagesPane.textContent) messagesPane.textContent+="\n";
            messagesPane.textContent+=`${message.author}: ${message.content}`;
        }
    };

    refreshButton.addEventListener("click", refresh);

    submitButton.addEventListener("click", async ()=>{
        const body = {author: authorInput.value, content: contentInput.value};
        if(!body.author || !body.content) return;

        await fetch(messageUrl, {
            method: "POST", 
            body: JSON.stringify(body)
        });

        authorInput.value = "";
        contentInput.value = "";
        await refresh();
    });
}

attachEvents();