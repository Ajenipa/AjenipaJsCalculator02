let num1 = parseFloat(prompt("enter first number"))
let operator = prompt("enter +, -, /, or x")
let num2 = parseFloat(prompt("enter second number"))

if(operator == "+"){
    let result = num1 + num2
    prompt(result)
}
else if(operator == "-"){
    let result = num1 - num2
    prompt(result)
}
else if(operator == "/"){
    let result = num1 / num2
    prompt(result)

}
else if(operator == "*"){
    let result = num1 * num2
    prompt(result)

}
else prompt("Enter A valid operator")