const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");

let noCount = 0;

noBtn.addEventListener("click", function () {
    noCount++;

    noBtn.textContent = "Are you sure? 🥺";

    // Make the Yes button bigger
    const newSize = 18 + (noCount * 10);
    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.padding = "15px 30px";
});

yesBtn.addEventListener("click", function () {
    mainContent.innerHTML =
        "<h1>😂😂😂😂😂😂😂</h1>" +
        "<div style='font-size:100px;'>BADING!!!</div>" +
        "<h2>I knew you'd say yes Gay 🌈🤣</h2>";
});