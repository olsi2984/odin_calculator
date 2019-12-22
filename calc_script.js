let inArr = [];
let resultArr = [0];
let numStr = "";
let newArr = [];
let tempArr = [];
const lastItem = inArr[inArr.length - 1];

function display() {
    document.getElementById("num_display").innerHTML = numStr;
    document.getElementById("history").innerHTML = inArr.join("");    
}

let buttons = document.querySelectorAll('#num');

for(let button of buttons) {
    button.addEventListener("click", function() { 
        if (this.innerText === "." && numStr [numStr.length-1]=== ".") {
            return;
        }
        if (numStr.includes("/0")) {
            return;        
        }
        if (numStr.length>10) {
            return;
        }
        if (this.innerText === "0" && numStr.length === 0) {
            return; 
        }   
        if (this.innerText === "." && numStr.length === 0) {
            let buttonText = this.innerText; 
            numStr = numStr + "0" + buttonText;
        } else {
            let buttonText = this.innerText; 
            numStr = numStr + buttonText;  
        }       

        display();          

       });         
}

let operators = document.querySelectorAll('#operator');

for(let operator of operators) {
    operator.addEventListener("click", function() { 
        inArr.push(numStr);
        if (numStr === "") {
            if (this.innerText === "+" || this.innerText === "*" || this.innerText === "/") {
                return;
            }
        }        
        numStr = this.innerText;         
        display();
        inArr.push(numStr);
        numStr = "";        
       });
}

let equals = document.querySelector('#equals');
equals.addEventListener("click", function(){ 
    if (inArr.length === 0) {
        return;
    }
    inArr.push(numStr); 
    
    if (lastItem === "") {
        inArr.splice(-1,1);
        inArr.pop();
    }
    for(var index in inArr){
        if(inArr[index]==''){
            inArr.splice(index,1);
            break;
         }
    }

    if (lastItem === "+" || lastItem === "*" || lastItem === "/" || lastItem === "-") {
        inArr.pop();
    }
    
    numStr = "";
    display(); 
    operate();
    clean();
    });

function operate() {


    for (let i = 0; i < inArr.length; i++) { ///// avoiding to have a "-" sign in inArr
    
        if (inArr[i]=== "-") {
            inArr[i] = "+";
            let tempStr1 = inArr[i+1];
            let tempStr = "-" + tempStr1;
            inArr[i+1] = tempStr;
        } else {
            inArr[i] = inArr[i];
        }
    }

    let newStr = inArr.join(":");
    let newArr = newStr.split(/[+""]/);
    for (let i = 0; i < newArr.length; i++) {
        let prodArr = newArr[i].split(":");
        for(var index in prodArr){
            if(prodArr[index]==''){
                prodArr.splice(index,1);
                break;
            }
        }
        for(var index in prodArr){
            if(prodArr[index]=='+'){
                prodArr.splice(index,1);
                break;
            }
        }
        for(var index in prodArr){
            if(prodArr[index]==':'){
                prodArr.splice(index,1);
                break;
            }
        }
        let prod = parseFloat(prodArr[0]);
        for (let i = 1; i < prodArr.length; i++) {
            
            if (prodArr[i] === "*") {
                prod = parseFloat(prod) * parseFloat(prodArr[i+1]);
            } else {
                if (prodArr[i] === "/") {
                    prod = parseFloat(prod) / parseFloat(prodArr[i+1]);    
                } else {
                    prod = parseFloat(prod) * 1;                    
                }
            }            
        }

        resultArr.push(parseFloat(prod));

    }

let result = 0;

for (let i = 0; i < resultArr.length; i++) {
    
    if (resultArr[i] === "" || resultArr[i] === ":" || resultArr[i] === ",") {
        result = result + 0;
    } else { if (resultArr[i] === false || Number.isNaN(resultArr[i])) {
        result = result + 0;
    } else {
        result = result + parseFloat(resultArr[i]);
    }
        
    }    
        
}

numStr = Number((result).toFixed(4));
display();

    console.log(inArr); 
    console.log(newStr);
    console.log(newArr); 
    console.log(resultArr);
    console.log(result);
}

let clear = document.querySelector('#clear');
clear.addEventListener("click", function(){ 
    clean();
    display();     
});

let backspace = document.querySelector('#backspace');
backspace.addEventListener("click", function(){ 
    let newStr = numStr.slice(0, -1);  
    numStr =  newStr;
    if (lastItem === "+" || lastItem === "*" || lastItem === "/") {
        inArr.pop();  
    }
    display();
});

function clean() {
    inArr = [];
    resultArr = [0];   
    numStr = "";
}
