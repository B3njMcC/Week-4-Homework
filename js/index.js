


calculate = () => {
    let firstNum = +document.getElementById("first").value;
    let secondNum = +document.getElementById("second").value;
    let operator = document.getElementById("operator").value;
    let result;

    if (operator === "+"){
        result = firstNum + secondNum;
    }else if(operator === "-"){
        result = firstNum - secondNum;
    }else if(operator === "/"){
        result = firstNum / secondNum;
    }else if(operator === "x"){
        result = firstNum * secondNum;
    }else {
        result = "The operator is invalid"
    }
console.log(result);
}



    
