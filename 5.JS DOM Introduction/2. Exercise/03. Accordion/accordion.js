function toggle() {
    // const button = document.getElementsByClassName("button")[0];
    // const text = document.getElementById("extra");

    // const isHidden = getComputedStyle(text).display ==="none";

    // text.style.display = isHidden ? "block": "none";
    // button.textContent = isHidden? "LESS": "MORE";


    const button = document.querySelector("div#accordion > div.head > span.button");

    if (button.textContent === "More") {
        button.textContent = "Less";
        document.getElementById("extra").style.display = "block";
    } else if (button.textContent === "Less") {
        button.textContent = "More";
        document.getElementById("extra").style.display = "none";
    }
}