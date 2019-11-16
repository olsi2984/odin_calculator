        if (numStr [numStr.length-1]=== ".") {
            return;
        }


                    numStr = "Can't divide by ";
            display();

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

    let newArr = newStr.split(/[+-]/);

    function operate() {
    let newStr = inArr.join("");
    let newArr = newStr.split(/[+-]/);
    console.log(newStr);
    console.log(inArr);
    console.log(newArr);
    
}