function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let outSpace = str.split(" ");
    let joinLetter = outSpace.join("");
    let result = joinLetter.toUpperCase();
    return result;
}
