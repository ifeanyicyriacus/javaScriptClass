
let result = ""
let n = 1
while (n <= 100) {
    result += getPentagonalNumber(n) + ",\t";
    if (n%10 == 0){
        result += "\n";
    }
    n++;
}
console.log(result)

function getPentagonalNumber(n){
	return n*(3*n - 1)/2
}
