export function getFormattedCatsString(cats: Cat[]) {
    let formattedString = ""
    cats.forEach((cat, index) => {
        if (index === 0) {formattedString = formattedString + cat.name}
        else if (index === cats.length - 1) {formattedString = formattedString + " and " + cat.name}
        else {formattedString = formattedString + ", " + cat.name}
        
    })
    return formattedString
}