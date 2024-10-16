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

    if (dimvalue == 1) {
        unitIdentifier.innerHTML = units[randomNumber]
        answerUnitIdentifier.innerHTML = units[secondRandomNumber]
    }
    else {
        unitIdentifier.innerHTML = units[randomNumber] + "<sup>" + dimvalue + "</sup>";
        answerUnitIdentifier.innerHTML = units[secondRandomNumber] + "<sup>" + dimvalue + "</sup>";
    }

    inputField.value = inputFieldDecimal;

    let totalFactor = Math.pow(Math.pow(10, dimvalue), Math.abs(randomNumber - secondRandomNumber));

    if (randomNumber < secondRandomNumber) { calculatedAnswer = inputFieldDecimal / totalFactor; }
    else { calculatedAnswer = inputFieldDecimal * totalFactor; }

    console.log("het juiste antwoord moet zijn: " + calculatedAnswer);
}

const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)

    setTimeout(() => {
        const alert = wrapper.querySelector('.alert')
        alert.classList.remove('show')
        alert.classList.add('fade')

        setTimeout(() => {
            wrapper.remove()
        }, 500)
    }, 2000)
}

//fix an error when you input a decimal value using a comma
answerField.addEventListener('keypress', function (event) {
    if (event.key === ',') {
        event.preventDefault();
        this.value += '.';
    }
});

function check() {
    if(answerField.value != "") //fix undefined error
    {
        if (calculatedAnswer == answerField.value) { appendAlert('Je hebt het goed!', 'success') }
        else { appendAlert('Fout, het juiste antwoord is: ' + calculatedAnswer, 'danger') }
    }
    else { appendAlert('Geen antwoord gegeven!', 'danger') }
}