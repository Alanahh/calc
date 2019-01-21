var one = document.getElementById('one');
var two = document.getElementById('two');
var tree = document.getElementById('tree');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var clear = document.getElementById('clear');

var point = document.getElementById('point');

var displayAbove = document.getElementById('displayAbove');

var displayValElement = document.getElementById('display');
var startVal = '0';
var value;

var countStringArray = [];

var nums = document.getElementsByClassName('num');
var operators = document.getElementsByClassName('operator');
var eqv = document.getElementById('equals');
var updateDisplayVal = (clickObj) =>{

 var text = clickObj.target.innerText;


 if(startVal === '0')
     startVal = '';
     startVal += text;
     console.log(startVal);
     displayValElement.innerText = startVal;
    console.log(displayValElement.innerText)
 
}

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener('click', updateDisplayVal, false);
}

clear.onclick = () => {
    startVal = '0';
    value = undefined;
    countStringArray = [];
    displayValElement.innerText = startVal;
    displayAbove.innerText = "";
}

point.onclick = () => {
    
    if(!startVal.includes('.'))
       startVal += '.';
    displayValElement.innerText = startVal;   
}


var calculate = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch(operator) {
        
        case '+':
            value = startVal;
            startVal = '0';
            displayValElement.innerText = value;
            console.log(value);
            countStringArray.push(value);
            countStringArray.push('+');
            break;

        case '-':
            value = startVal;
            startVal = '0';
            displayValElement.innerText = startVal;
            countStringArray.push(value);
            countStringArray.push('-');
            break;  

        case 'x':
            value = startVal;
            startVal = '0';
            displayValElement.innerText = startVal;
            countStringArray.push(value);
            countStringArray.push('*');
            break; 

        case '÷':
            value = startVal;
            startVal = '0';
            displayValElement.innerText = startVal;
            countStringArray.push(value);
            countStringArray.push('/');
            break; 

        case '=':
            countStringArray.push(startVal);
            displayAbove.innerHTML = countStringArray.join(' ') + "=";
            var evaluate = eval(countStringArray.join(' '));   
            startVal = evaluate + '';
            countStringArray.push("=");
            countStringArray.push(startVal);

            displayValElement.innerHTML = startVal;
          
            countStringArray = [];
            break;  

        default:
            break; 

    }
}

for(let j = 0; j < operators.length; j++){
    operators[j].addEventListener('click', calculate, false);
}

eqv.onclick = () => {
    if(displayValElement.innerHTML == "Infinity")
    displayValElement.innerText = "Error";
}
