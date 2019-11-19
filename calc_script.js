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
        if (numStr.length>10) {
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
            if (this.innerText === "+" || this.innerText === "*" || this.innerText === "/") {
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
    if (inArr.length===0) {
        return;
    }
    inArr.push(numStr);   
    numStr = "";
    display();  
    operate();
    clean();
    });

function operate() {
    
    for (let i = 0; i < inArr.length; i++) {
        if (inArr[i]=== "-") {
            inArr[i] = "+";
            let tempStr1 = inArr[i+1];
            let tempStr = "-" + tempStr1;
            inArr[i+1] = tempStr;
        } else {
            inArr[i] = inArr[i];
        }
        
    }
    let newStr = inArr.join("");
    let newArr = newStr.split(/[+""]/);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].includes("*")) {
            let x = newArr[i];
            let prodArr = x.split("*");
            let prod = parseFloat(prodArr[0]) * parseFloat(prodArr[1]);
            resultArr.push(prod);

        } else { if (newArr[i].includes("/")) {
            let y = newArr[i];
            let divArr = y.split("/");
            let divid = parseFloat(divArr[0]) / parseFloat(divArr[1]);
            resultArr.push(divid);
        } else {
            resultArr.push(newArr[i]);
        }
            
        }
        
    }

let result = 0;

for (let i = 0; i < resultArr.length; i++) {
    
    if (resultArr[i] === "") {
        result = result + 0;
    } else {
        result = result + parseFloat(resultArr[i]);
    }    
        
}

numStr = Number((result).toFixed(4));
display();

    console.log(newStr);
    console.log(inArr);
    console.log(newArr);
    console.log(resultArr);
    console.log(result);
    
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





