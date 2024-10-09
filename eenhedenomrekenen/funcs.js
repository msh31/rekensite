const units = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let selectionMenu = document.getElementById("selectionMenu");
let inputField = document.getElementById("inputField");
let answerField = document.getElementById("answerField");
let unitIdentifier = document.getElementById("unitIdentifier");
let answerUnitIdentifier = document.getElementById("answerUnitIdentifier");

let calculatedAnswer;

function nieuw() {
    answerField.value = "";
    let dimvalue = selectionMenu.value;
    let randomNumber = Math.floor(Math.random() * 7);
    let secondRandomNumber = Math.floor(Math.random() * 7);
    let inputFieldDecimal = (Math.random() * 1000).toFixed(3);

    if ( dimvalue == 1 ) { 
        unitIdentifier.innerHTML = units[randomNumber] 
        answerUnitIdentifier.innerHTML = units[secondRandomNumber]
    }
    else { 
        unitIdentifier.innerHTML = units[randomNumber] + "<sup>" + dimvalue + "</sup>"; 
        answerUnitIdentifier.innerHTML = units[secondRandomNumber] + "<sup>" + dimvalue + "</sup>";
    }

    inputField.value = inputFieldDecimal;

    let totalFactor = Math.pow(Math.pow(10, dimvalue), Math.abs(randomNumber - secondRandomNumber));
    

    if(randomNumber < secondRandomNumber) { calculatedAnswer = inputFieldDecimal / totalFactor; }
    else { calculatedAnswer = inputFieldDecimal * totalFactor; }

    alert("het juiste antwoord moet zijn: " + calculatedAnswer); //huh
}

function check() {
    if(calculatedAnswer == answerField.value)
        alert("goed");
    else
        alert("fout");
}