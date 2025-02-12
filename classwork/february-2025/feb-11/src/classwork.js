const addThreeToEachElement = (arr) => {
  return arr.map((number) => (number + 3));
}

const products = [
  {id : 1, name : "Laptop", price : 1200},
  {id : 2, name : "Phone", price : 800},
  {id : 3, name : "Tablet", price : 500},
  {id : 4, name : "Desktop", price : 700}
];
const cherryPickExpensive = (arr, threshold) => (
  arr.filter((product) => product.price > threshold)
);

console.log(cherryPickExpensive(products, 700));

