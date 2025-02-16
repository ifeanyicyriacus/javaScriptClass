
const {getGeoPoliticalZoneByState} = require('./../../src/enums/nigeria_state_geo_political_zones_functions');
const {NigeriaStateGeoPoliticalZones} = require('./../../src/enums/nigeria_state_geo_political_zones');

let state1     = "Imo";
let state2     = "Nasarawa";
let state3     = "Taraba";
let state4     = "Kebbi";
let state5     = "Akwa-Ibom";
let state6     = "Lagos";
let wrongState = "New York";

test("Nigeria State Geo-Political Zones Functions Return Correct Zone Value", () => {
    expect(getGeoPoliticalZoneByState(state1)).toEqual(NigeriaStateGeoPoliticalZones.SOUTH_EAST);
    expect(getGeoPoliticalZoneByState(state2)).toEqual(NigeriaStateGeoPoliticalZones.NORTH_CENTRAL);
    expect(getGeoPoliticalZoneByState(state3)).toEqual(NigeriaStateGeoPoliticalZones.NORTH_EAST);
    expect(getGeoPoliticalZoneByState(state4)).toEqual(NigeriaStateGeoPoliticalZones.NORTH_WEST);
    expect(getGeoPoliticalZoneByState(state5)).toEqual(NigeriaStateGeoPoliticalZones.SOUTH_SOUTH);
    expect(getGeoPoliticalZoneByState(state6)).toEqual(NigeriaStateGeoPoliticalZones.SOUTH_WEST);
})



