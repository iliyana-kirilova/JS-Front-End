window.addEventListener("DOMContentLoaded", solution);

function solution() {
    const mainSection = document.getElementById("main");
    const articlesUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
    const detailsUrl = "http://localhost:3030/jsonstore/advanced/articles/details/";

    loadArticles();

    async function loadArticles() {
        // GET request
        const res = await fetch(articlesUrl);
        const articles = await res.json();

        //За всяка статия създаваме accordion
        articles.forEach(article => createAccordion(article));
    }

    function createAccordion(article) {
        // Outer container
        const accordion = document.createElement("div");
        accordion.className = "accordion";

        // Header section
        const head = document.createElement("div");
        head.className = "head";

        const span = document.createElement("span");
        span.textContent = article.title;

        const button = document.createElement("button");
        button.className = "button";
        button.id = article._id;
        button.textContent = "More";

        head.appendChild(span);
        head.appendChild(button);

        // Hidden content section
        const extra = document.createElement("div");
        extra.className = "extra";
        extra.style.display = "none";

        accordion.appendChild(head);
        accordion.appendChild(extra);

        // Add accordion to page
        mainSection.appendChild(accordion);

        // Button click → toggle content
        button.addEventListener("click", async () => {
            if (button.textContent === "More") {
                // GET request → Load details
                const res = await fetch(detailsUrl + article._id);
                const details = await res.json();

                // Insert article content
                extra.innerHTML = "";
                const p = document.createElement("p");
                p.textContent = details.content;
                extra.appendChild(p);

                // Show content
                extra.style.display = "block";
                button.textContent = "Less";

            } else {
                // Hide content
                extra.style.display = "none";
                button.textContent = "More";
            }
        });
    }
}
