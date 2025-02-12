function sqrt(n){
    let guess = n / 2;
    while(true){
        lastGuess = guess;
        guess = (guess + (n / guess)) / 2;
        if(Math.abs(lastGuess - guess) < 0.0001 ){
            break;
        }
    }
    return Math.round(guess);
}

console.log(`Square root of 4 is: ${sqrt(4)}`);
console.log(`Square root of 81 is: ${sqrt(81)}`);
console.log(`Square root of 49 is: ${sqrt(49)}`);
console.log(`Square root of 121 is: ${sqrt(121)}`);

