let inArr = [];
let resultArr = [0];
let numStr = "";

function display() {
    document.getElementById("display").innerHTML = numStr;    
}

let buttons = document.querySelectorAll('#num');

for(let button of buttons) {
    button.addEventListener("click", function() { 
    
        let buttonText = this.innerText; 
        numStr = numStr + buttonText;
        display();          

       });
         
}

let operators = document.querySelectorAll('#operator');

for(let operator of operators) {
    operator.addEventListener("click", function() { 

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
    for (let i = 0; i < inArr.length; i++) {
        let a = parseFloat(inArr[i]);
        if (typeof a === "number") {
            resultArr[i] = a;
        } else {
            if (inArr[i]==="*") {
                resultArr[i] = inArr[i-1] * inArr[i+1];
            } else {
                if (inArr[i]==="/") {
                    resultArr[i] = inArr[i-1] / inArr[i+1];    
                } else {
                    if (inArr[i]==="-") {
                      resultArr[i] = -1 * inArr[i+1];  
                    } else {
                        inArr[i] = 0 ;
                    }
                }
            }
        }
        
    }
}





