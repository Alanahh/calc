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
            displayValElement.innerText = startVal;
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
            var evaluate = eval(countStringArray.join(' '));   
            startVal = evaluate + '';
            countStringArray.push("=");
            countStringArray.push(startVal);
            // displayValElement.innerHTML = countStringArray.join("");
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
    // alert('find')
    // console.log(displayValElement.innerHTML)
    displayValElement.innerText = "Error";
}
// equals.onclick = () =>{
//     console.log(startVal);
//     console.log(!displayValElement.innerText.includes('.'))
// }
// for(let i = 0; i < operators.length; i++){
//     operators[i].addEventListener('click', count, false);
// }







































// function Calculator() {

//     this.getNums = function(){

//         this.a = +prompt("Print in first num please", 0);
//         this.b = +prompt("Print in second num please", 0);

//     };

//     this.sum = function(){
//         return this.a + this.b;
//     };

//     this.min = function(){
//         return this.a - this.b;
//     };

//     this.mul = function(){
//         return this.a * this.b;
//     };

//     this.div = function(){
//         if(this.b!==0){
//             return this.a / this.b;
//         }else{
//             alert("Делить на ноль нельзя")
//         }
//     };
    
// }


// var calc = new Calculator();
// calc.getNums();

// console.log(calc.sum());
// console.log(calc.mul());
// console.log(calc.div());


