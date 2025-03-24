let declineCount = 0;
const messages = [
    "Are you really sure? 🥺",
    "Think again... What if I'm the one? 🤔",
    "You might regret this. 😢",
    "Imagine a life without me. 💔",
    "Last chance! 😖"
];

const catImages = [
    "6254609c996571a1488e46d1cc702bb5.jpg",
    "746d22074e490050b11dd15c43b5cb96.jpg",
    "8248857610db7251980522a5656b8009.jpg",
    "c664add2a9b3b05118dcb453c7a6d177.jpg",
    "d4248382b71ea3da1f3fa07f8844fe39.jpg"
];

function acceptConfession() {
    document.getElementById("response").innerText = "YAY! 🎉 Welcome to my heart! 💖";
}

function declineConfession() {
    if (declineCount < messages.length) {
        document.getElementById("response").innerText = messages[declineCount];
        document.getElementById("cat-img").src = catImages[declineCount];
        document.getElementById("cat-img").style.display = "block";
        declineCount++;
    } else {
        document.getElementById("response").innerText = "Fine... I respect your decision. But I tried. 😭";
        document.getElementById("no-btn").disabled = true;
    }
}
