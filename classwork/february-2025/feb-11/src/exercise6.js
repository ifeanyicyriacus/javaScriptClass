const findExpensiveProducts = (products, threshold) => {
    let result = [];
    products.forEach((product) => {
        if (threshold < product.price) {
            result.push(product);
        }
    });
    return result;
}

module.exports = {findExpensiveProducts};
