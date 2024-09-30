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

one.addEventListener("click", function() {
    appendToDisplay("1");
});
two.addEventListener("click", function() {
    appendToDisplay("2");
});
three.addEventListener("click", function() {
    appendToDisplay("3");
});
four.addEventListener("click", function() {
    appendToDisplay("4");
});
five.addEventListener("click", function() {
    appendToDisplay("5");
});
six.addEventListener("click", function() {
    appendToDisplay("6");
});
seven.addEventListener("click", function() {
    appendToDisplay("7");
});
eight.addEventListener("click", function() {
    appendToDisplay("8");
});
nine.addEventListener("click", function() {
    appendToDisplay("9");
});
zero.addEventListener("click", function() {
    appendToDisplay("0");
});
minus.addEventListener("click", function() {
    appendToDisplay("-");
});
plus.addEventListener("click", function() {
    appendToDisplay("+");
});
multiply.addEventListener("click", function() {
    appendToDisplay("*");
});
divide.addEventListener("click", function() {
    appendToDisplay("/");
});
dot.addEventListener("click", function() {
    appendToDisplay(".");
});
clear.addEventListener("click", function() {
    h1.innerText = "0";
});
equal.addEventListener("click", function() {
    try {
        
        let expression = h1.innerText.replace(/\^2/g, '**2');
        let ans = eval(expression);
        h1.innerText = ans;
    } catch (e) {
        h1.innerText = "Error";
    }
});
square.addEventListener("click", function() {
    appendToDisplay("^2");
});


function appendToDisplay(value) {
    if (h1.innerText === "0" || h1.innerText === "Error") {
        h1.innerText = value; 
    } else {
        h1.innerText += value; 
    }
}



