function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let sarcharge = fare * 0.20;
    let total = fare + sarcharge + 30;
    return total;
}


function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let outSpace = str.split(" ");
    let joinLetter = outSpace.join("");
    let result = joinLetter.toUpperCase();
    return result;
}


function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    let result1 = (player1.foul || 0) + (player1.cardY || 0) + (player1.cardR || 0);
    let result2 = (player2.foul || 0) + (player2.cardY || 0) + (player2.cardR || 0);
    if (result1 < result2) {
        return player1.name;
    } else if (result1 = result2) {
        return "Tie";
    } else {
        return player2.name;
    }
}


function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }   
    let total = 0;
    let passCount = 0;
    let failCount = 0;
    if (marks.length === 0) {
        return {finalScore: 0, pass: 0, fail: 0};
    }
    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    const average = Math.round(total / marks.length);
    return {finalScore: average, pass: passCount, fail: failCount};
}