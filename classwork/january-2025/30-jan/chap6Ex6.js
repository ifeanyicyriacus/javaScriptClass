function displayPattern(n){
    let result = "";
    let blank = "  ";
    for(let i = n - 1; i >= 0; i--){
        result += blank.repeat(i);
        for (let j = n-i; j > 0; j--){
            result += j +" ";
        }
        result += "\n";        
    }
    return result;
}



var input = require('prompt-sync')();
number = Number(input("Enter the number of times: "));
console.log(displayPattern(number));
