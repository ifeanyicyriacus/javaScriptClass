const findExpensiveProducts = (arr, threshold) => (
    arr.filter((product) => product.price > threshold)
);

module.exports = {findExpensiveProducts};
