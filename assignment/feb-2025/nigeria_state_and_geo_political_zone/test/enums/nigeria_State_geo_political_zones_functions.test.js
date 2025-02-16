
const {getGeoPoliticalZoneByState} = require('./../../src/enums/nigeria_state_geo_political_zones_functions')

let state1     = "Imo";
let state2     = "Nasarawa";
let state3     = "Taraba";
let state4     = "Kebbi";
let state5     = "Akwa-Ibom";
let state6     = "Lagos";
let wrongState = "New York";

test("Nigeria State Geo-Political Zones Functions Return Correct Zone Value", () => {
    expect(getGeoPoliticalZoneByState(state1)).toEqual(SOUTH_EAST);
    // expect(getGeoPoliticalZoneByState(state2)).toEqual(NORTH_CENTRAL);
    // expect(getGeoPoliticalZoneByState(state3)).toEqual(NORTH_EAST);
    // expect(getGeoPoliticalZoneByState(state4)).toEqual(NORTH_WEST);
    // expect(getGeoPoliticalZoneByState(state5)).toEqual(SOUTH_SOUTH);
    // expect(getGeoPoliticalZoneByState(state6)).toEqual(SOUTH_WEST);
})