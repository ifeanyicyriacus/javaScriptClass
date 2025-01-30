const name = "Ifeanyi";
function greet(name){
    return `Hello ${name}`;
}
function executeFunction(functionName, string){
    return functionName(string);
}
let message = executeFunction(greet, name);
console.log(message)
