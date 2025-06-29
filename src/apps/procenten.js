let oldValue = document.getElementById("input_old");
let type = document.getElementById("select_type");
let percentageValue = document.getElementById("input_percentage");
let factorValue = document.getElementById("input_factor");
let newValue = document.getElementById("input_new");
let division = document.getElementById("input_division");

function inputOld(){
    //check of er wat ingevuld is in het element oldValue '!=' betekent 'NIET gelijk aan'
    if(oldValue.value !== ""){
        oldValue.classList.replace("is-invalid", "is-valid");
    } else {
        oldValue.classList.replace("is-valid", "is-invalid");
    }
}

function calcfactor(soort, percentage){
    let factoroutput  = 0;
    if(soort === 1){ //type = 'van'
        factoroutput  = percentage/100;
    } else if (soort === 2){ //type = 'toename'
        factoroutput  = 1 + percentage/100
    } else {         //type = 'afname'
        factoroutput  = 1 - percentage/100
    }
    return factoroutput ;
}

function calculate(){
    if(oldValue.value !== "" && type.value !== "" && percentageValue.value !== "")
    {
        //de factorValue uitrekenen
        factorValue.value = calcfactor(type.value, percentageValue.value)
        //met deze factorValue newValue uitrekenen
        newValue.value = oldValue.value * factorValue.value;
    } else if (newValue.value !== "" && type.value !== "" && percentageValue.value !== "")
    {
        //de factorValue uitrekenen
        factorValue.value = calcfactor(type.value, percentageValue.value)
        //met deze factorValue oldValue uitrekenen
        oldValue.value = newValue.value / factorValue.value;
    } else
    {
        //de factorValue uitrekenen
        factorValue.value = newValue.value / oldValue.value;
        //uit de factorValue de toe- of afname halen
        if(factorValue.value > 1){
            //er is dus sprake van toename
            type.value = 2;
            percentageValue.value = (factorValue.value - 1) * 100;
        } else if (factorValue.value < 1){
            //er is sprake van afname
            type.value = 3;
            percentageValue.value = (1 - factorValue.value) * 100;
        } else {
            //de factorValue is dus 1, dus geen toe- of afname
            type.value = 1;
            percentageValue.value = 100;
        }
    }
}