let h1 = document.querySelector('h1');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let quit = document.getElementById('quit');
let clear = document.getElementById('clear');
let square = document.getElementById('square');
let divide = document.getElementById('divide');
let multiply = document.getElementById('*');
let minus = document.getElementById('-');
let plus = document.getElementById('+');
let mod = document.getElementById('%');
let dot = document.getElementById('.');
let equal = document.getElementById("=");

one.addEventListener("pointerdown", function() {
    appendToDisplay("1");
});
two.addEventListener("pointerdown", function() {
    appendToDisplay("2");
});
three.addEventListener("pointerdown", function() {
    appendToDisplay("3");
});
four.addEventListener("pointerdown", function() {
    appendToDisplay("4");
});
five.addEventListener("pointerdown", function() {
    appendToDisplay("5");
});
six.addEventListener("pointerdown", function() {
    appendToDisplay("6");
});
seven.addEventListener("pointerdown", function() {
    appendToDisplay("7");
});
eight.addEventListener("pointerdown", function() {
    appendToDisplay("8");
});
nine.addEventListener("pointerdown", function() {
    appendToDisplay("9");
});
zero.addEventListener("pointerdown", function() {
    appendToDisplay("0");
});
minus.addEventListener("pointerdown", function() {
    appendToDisplay("-");
});
plus.addEventListener("pointerdown", function() {
    appendToDisplay("+");
});
multiply.addEventListener("pointerdown", function() {
    appendToDisplay("*");
});
divide.addEventListener("pointerdown", function() {
    appendToDisplay("/");
});
dot.addEventListener("pointerdown", function() {
    appendToDisplay(".");
});
clear.addEventListener("pointerdown", function() {
    h1.innerText = "0";
});
equal.addEventListener("pointerdown", function() {
    try {
        let expression = h1.innerText.replace(/\^2/g, '**2');
        let ans = eval(expression);
        h1.innerText = ans;
    } catch (e) {
        h1.innerText = "Error";
    }
});
square.addEventListener("pointerdown", function() {
    appendToDisplay("^2");
});

function appendToDisplay(value) {
    if (h1.innerText === "0" || h1.innerText === "Error") {
        h1.innerText = value; 
    } else {
        h1.innerText += value; 
    }
}



