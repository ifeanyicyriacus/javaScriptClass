
const NigeriaStateGeoPoliticalZones = Object.freeze({
    NORTH_CENTRAL : ["Benue", "FCT", "Kwara", "Nasarawa", "Niger", "Plateau"],
    NORTH_EAST : ["Adamawa", "Bauchi", "Brono", "Gombe", "Taraba", "Yobe"],
    NORTH_WEST : ["Kaduna", "Katisna", "Kano", "Kebbi", "Sokoto", "Jigwa", "Zamfara"],
    SOUTH_EAST : ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    SOUTH_SOUTH : ["Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
    SOUTH_WEST :["Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo"],

    __states : [],
    constructor(states){ this.__states = states;},
    toString(){
        name = this.constructor.name.split("_");
        return name[0].substring(0, 1).toUpperCase()
            + name[0].substring(1).toLowerCase() + "-"
            + name[1].substring(0, 1).toLowerCase()
            + name[1].substring(1).toLowerCase();
    }
});

module.exports = {NigeriaStateGeoPoliticalZones};
