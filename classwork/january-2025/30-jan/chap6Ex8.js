function celsiusToFahrenheit(celsius){
    return ((9 / 5) * celsius + 32);
}

function fahrenheitToCelsius(fahrenheit){
    return ((5/9)*(fahrenheit-32));
}

let cTemps = [40,39,32,31];
let fTemps = [120,110,40,30];

console.log("Celsius\t\tFahrenheit\t|\tFahrenheit\t\tCelsius");
let result = ""
for(let i = 0; i < cTemps.length; i++){
    result += `${cTemps[i]}\t\t${Math.round(celsiusToFahrenheit(cTemps[i]))}\t\t|\t`;
    result += `${fTemps[i]}\t\t\t${Math.round(fahrenheitToCelsius(fTemps[i]))}\n`;   
}
console.log(result);

