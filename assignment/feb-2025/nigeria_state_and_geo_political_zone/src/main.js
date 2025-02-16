const {getGeoPoliticalZoneByState} = require("./enums/nigeria_state_geo_political_zones_functions");

let input = require('prompt-sync')();
let response = input("Enter state name: ");

console.log("Geographical zone is: ");

try {
    let zone = getGeoPoliticalZoneByState(response);
    console.log(`' ${response} state belongs to '${zone}' geo political zone`)
} catch (error) {
    console.log(error.message);
}