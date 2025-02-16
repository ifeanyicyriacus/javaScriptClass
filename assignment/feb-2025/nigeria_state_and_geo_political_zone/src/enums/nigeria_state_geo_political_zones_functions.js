const {NigeriaStateGeoPoliticalZones} = require('./nigeria_state_geo_political_zones')

const getGeoPoliticalZoneByState = (stateName) => {
    for (const nigeriaStateGeoPoliticalZonesKey in NigeriaStateGeoPoliticalZones) {
        for (const state of NigeriaStateGeoPoliticalZones[String(nigeriaStateGeoPoliticalZonesKey)]){
            if (state.toLowerCase() === stateName.toLowerCase()){
                return NigeriaStateGeoPoliticalZones[String(nigeriaStateGeoPoliticalZonesKey)];
            }
        }
    }
    throw new Error(`'${stateName}' is not a valid state name`);
}

module.exports = {getGeoPoliticalZoneByState};