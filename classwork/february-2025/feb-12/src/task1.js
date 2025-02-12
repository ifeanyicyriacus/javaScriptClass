const adder = (arr) => {
    arr.reverse();
    let value = 1;
    let carry = 0;

    for (let i = 0; i < arr.length; i++) {
        value += arr[i] + carry;
        if (value < 10) {
            arr[i] = value;
            carry = 0;
            break;
        } else {
            carry = Math.round(value / 10);
            value = value % 10;
            arr[i] = value;
            value = 0;
        }
    }
    if (carry > 0) {
        arr.push(carry);
    }
    return arr.reverse();
}

module.exports = {adder};