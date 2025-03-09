const screen = document.getElementById("screen");
const power = document.getElementById("power");
let forFirst = true;
let isOperand = false;
let isOn = false;
let result = 0;


function operand(e) {
    if(!isOn) return;
    isOperand = true;
    screen.value += e;
}


function operator(e){
    if(!isOn) return;
    if(forFirst) {
        if (screen.value == "" && (e === '+' || e === '-' || e === '.')) {
            screen.value += e;
            forFirst = false;
            return;
        }
    }
    if (isOperand) {
       screen.value += e;
       isOperand = false; 
    }
}


function clrAll() {
    if(!isOn) return;
    screen.value = "";
    isOperand = true;
    forFirst = true;
}


function clr() {
    if(!isOn) return;
    screen.value = screen.value.slice(0, -1);
    isOperand = true;
}


function equal() {
    if(!isOn) return;
    if(screen.value == "") {
        alert("Please enter a value");
        return;
    }
    try {
        screen.value = eval(screen.value);
        isOperand = true;
    } catch (error) {
        screen.value = "ERROR";
        isOperand = false;
        return;
        
    }
}


function onAndOff() {
    if(isOn) {
        screen.value = "";
        screen.placeholder = "OFF";
        isOn = false;
        isOperand = false;
        forFirst = true;
        power.style.color = "black";
    } else {
        screen.placeholder = "0";
        screen.value = "";
        isOn = true;
        power.style.color = "cyan";
    }
}