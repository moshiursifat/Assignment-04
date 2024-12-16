
function getInputFieldValueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputmoney = parseFloat(inputvalue);
    return inputmoney;
}

function innertext(id){
    const inputtext = document.getElementById(id).innerText;
    const number=parseFloat(inputtext);
    return number;
}