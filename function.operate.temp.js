    let newStr = inArr.join("");

    if (inArr.includes("+")) {
        let newArr = newStr.split("+");
        
        for (let i = 0; i < newArr.length; i++) {

            if (newArr[i].includes("*") || newArr[i].includes("/")) {
                let tempStr = newArr[i];
                let tempArr = tempStr.split("");
                let prod = tempArr[0];
                for (let i = 1; i < tempArr.length; i++) {
                    if (tempArr[i] === "*") {
                        prod = prod * tempArr[i+1];
                    } else {
                        if (tempArr[i] === "/") {
                            prod = prod / tempArr[i+1];    
                        } else {
                            prod = prod * 1;
                            
                        }
                    } 
                    
                }
                resultArr.push(prod);
            } else {
                resultArr.push(newArr[i]);
            }                    
        }

    } else {
        let newArr = newStr.split("");
        let prod = newArr[0];
        for (let i = 1; i < newArr.length; i++) {
            
            if (newArr[i] === "*") {
                prod = prod * newArr[i+1];
            } else {
                if (newArr[i] === "/") {
                    prod = prod / newArr[i+1];    
                } else {
                    prod = prod * 1;
                    
                }
            }            
        }
        resultArr.push(prod);

    }