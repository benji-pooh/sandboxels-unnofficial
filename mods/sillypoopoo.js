elements.heat.temp = 2000
elements.cool.temp = -2000

elements.diarrhea = {
    color: "#301212",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 500,
    state: "liquid",
    density: 10000000,
};
elements.bloody_explosive_diarrhea = {
    color: "#8f0000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 500,
    state: "liquid",
    density: 10000000,
};
if (!elements.water.reactions) { // Include this block once
    elements.water.reactions = {} // This creates the property if it doesn't exist
}
elements.water.reactions.diarrhea = { "elem1":"diarrhea", "elem2":"dirty_water" }
if (!elements.bloody_explosive_diarrhea.reactions) { // Include this block once
    elements.bloody_explosive_diarrhea.reactions = {} // This creates the property if it doesn't exist
}
elements.bloody_explosive_diarrhea.reactions.fire = { "elem1":"bloody_explosive_diarrhea", "elem2":"cluster_bomb" }
