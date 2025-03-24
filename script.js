const images = [
    "images (4).jpeg",
    "images (3).jpeg",
    "c664add2a9b3b05118dcb453c7a6d177.jpg",
    "8248857610db7251980522a5656b8009.jpg",
    "746d22074e490050b11dd15c43b5cb96.jpg",
    "d4248382b71ea3da1f3fa07f8844fe39.jpg",
    "6254609c996571a1488e46d1cc702bb5.jpg"
];

let currentStep = 0;

function firstYes() {
    document.getElementById("question").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Are you sure? 🤩";
    document.getElementById("option1").innerText = "Yes";
    document.getElementById("option2").innerText = "Joke";
    updateImage();
}

function firstNo() {
    document.getElementById("question").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Pls reconsider? 🥺";
    document.getElementById("option1").innerText = "Fine... 🙄";
    document.getElementById("option2").innerText = "Still No";
    updateImage();
}

function option1Click() {
    alert("YAY! DAHIL JAN, HART HART KA SAKIN! 💖");
}

function option2Click() {
    let question = document.getElementById("follow-up-question").innerText;

    if (question === "Pls reconsider? 🥺") {
        document.getElementById("follow-up-question").innerText = "Awa nalang? 😢";
        document.getElementById("option1").innerText = "Sige na nga";
        document.getElementById("option2").innerText = "No pa rin";
    } else if (question === "Awa nalang? 😢") {
        document.getElementById("follow-up-question").innerText = "Sure ka? Last chance! 😭";
        document.getElementById("option1").innerText = "Okay fine";
        document.getElementById("option2").innerText = "No talaga";
    } else if (question === "Sure ka? Last chance! 😭") {
        document.getElementById("follow-up").style.display = "none";
        alert("💔 You have broken my heart... 😭");
    }

    updateImage();
}

function updateImage() {
    let imgElement = document.getElementById("display-image");
    imgElement.src = images[currentStep];
    imgElement.style.display = "block";

    currentStep++;
    if (currentStep >= images.length) {
        currentStep = 0;
    }
}
