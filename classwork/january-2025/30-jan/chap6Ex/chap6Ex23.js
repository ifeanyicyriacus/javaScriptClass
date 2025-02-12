function convertMillis(millis){
    let sec = millis / 1000;
    let hr = 0;
    
    if (sec/ (60*60) >= 1){
        hr = Math.floor(sec/ (60*60));
        
        
    
    
    return "";
}


let input = require("prompt-sync")();
let millis = Number(input("Enter the time in milliseconds: "));
console.log(`${millis} is equivalent to ${convertMillis(millis)}`);
