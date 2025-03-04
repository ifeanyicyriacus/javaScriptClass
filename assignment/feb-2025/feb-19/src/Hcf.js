const getHcf = (arr) =>{
    let newArr = arr.slice();
    let result = [];

    let factor = 2;
    let isCalculating = true;

    while (isCalculating){
        let check = 0;
        let tempArray = [];

        for (let i = 0; i < newArr.length ; i++){
            if (newArr[i] % factor === 0){
                tempArray.push(newArr[i] / factor);
                check++;
            }
        }
        let max = Math.max(...newArr)
        if (check === newArr.length){
            result.push(factor);
            newArr = tempArray;
        } else if (factor < max){
            factor++;
        } else {
            isCalculating = false;
        }
    }
    return result;
}

// getHcf([6, 9, 15])

module.exports = {getHcf};