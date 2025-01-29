

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
}

function getCarAttributes(car){
    for (const attribute in car) {
      console.log(`${attribute}: ${car[attribute]}`);
    }
}

getCarAttributes(car)
