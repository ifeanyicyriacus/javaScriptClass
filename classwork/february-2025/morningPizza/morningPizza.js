//let input = [9,2,2,1,3,5,5]

function numberListToFreqDict(listOfNumber){
    //let newList = listOfNumber.sort();
    const result = {}
    for(let i = 0; i < listOfNumber.length; i++){
        let count = 0;
        for(let j = 0; j < listOfNumber.length; j++){
            if (listOfNumber[i] == listOfNumber[j]){
                count += 1;
            }
        }
            result[`${listOfNumber[i]}`] = count;
    }
    return result; 
}

module.exports = numberListToFreqDict;
//console.log(numberListToFreqDict(input))
