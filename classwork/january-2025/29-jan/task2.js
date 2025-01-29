

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
}

for (const attribute in car) {
  console.log(`${attribute}: ${car[attribute]}`);
}
