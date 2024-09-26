const units = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let dimension = document.getElementById("selectionMenu");
let fieldInput = document.getElementById("inputField");
let fieldAnswer = document.getElementById("answerField");
let unitIdentity = document.getElementById("unitIdentifier");
let AnswerUnitIdentity = document.getElementById("answerUnitIdentifier");

function nieuw() {
    let dimvalue = dimension.value;

    if(dimvalue == 0) {
        alert("Kies eerst een dimensie!");
    } else {
        let randomNumber = Math.floor(Math.random() * 7);
        //console.log("Random Number: " + randomNumber);
        unitIdentity..innerHTML = units[randomNumber] + "<sup>" + dimvalue + "</sup>";
    }
}

function check() {
    alert("Hallo " + naam);
}