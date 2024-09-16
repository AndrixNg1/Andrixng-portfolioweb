function addToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay(value) {
    document.getElementById("result").value = '';
}

function deleteLast(value) {
    let ToDisplay = document.getElementById("result").value;
    document.getElementById("result").value = ToDisplay.slice(0, -1);
}

function resulta(value) {
    let ToDisplay = document.getElementById("result").value;
    let result= eval(ToDisplay);
    document.getElementById("result").value = result;
}