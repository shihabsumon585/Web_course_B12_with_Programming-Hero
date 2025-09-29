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