function sumDigits(n){
    let count = 1;
    let total = 0;
    n = String(n);
    while (count < n.length){
        total += Number(n[count]);
        count++;
    }
    return total;
}

console.log(sumDigits(23333))
