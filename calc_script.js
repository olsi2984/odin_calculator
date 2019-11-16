let inArr = [];
let resultArr = [0];
let numStr = "";

function display() {
    document.getElementById("display").innerHTML = numStr;    
}

let buttons = document.querySelectorAll('#num');

for(let button of buttons) {
    button.addEventListener("click", function() { 
        if (this.innerText === "." && numStr [numStr.length-1]=== ".") {
            return;
        }
        if (this.innerText === "0" && inArr [inArr.length-1]=== "/") {
            return;        
        }
        if (this.innerText !== "." && numStr [numStr.length-1]=== "0") {
            return;        
        }
        let buttonText = this.innerText; 
        numStr = numStr + buttonText;
        display();          

       });
         
}

let operators = document.querySelectorAll('#operator');

for(let operator of operators) {
    operator.addEventListener("click", function() { 
        
        if (numStr === "") {
            if (this.innerText === "-" || this.innerText === "+" || this.innerText === "*" || this.innerText === "/") {
                return;
            }
        }
        
        inArr.push(numStr);    
        numStr = this.innerText;         
        display();
        inArr.push(numStr);
        numStr = "";        
       });
}

let equals = document.querySelector('#equals');
equals.addEventListener("click", function(){ 
    inArr.push(numStr);   
    numStr = "";
    display();  
    operate();
    });

function operate() {
    let newStr = inArr.join("");
    let newArr = newStr.split(/[+-]/);
    console.log(newStr);
    console.log(inArr);
    console.log(newArr);
    
}

let clear = document.querySelector('#clear');
clear.addEventListener("click", function(){ 
    clean();
    display(); 
    
    });

function clean() {
    inArr = [];
    resultArr = [0];   
    numStr = "";
}





