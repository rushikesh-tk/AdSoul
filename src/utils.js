const colors = ["red", "orange", "blue", "pink", "turquoise"];

export const getColorFromId = (id) =>{
    return colors[id%colors.length];
}