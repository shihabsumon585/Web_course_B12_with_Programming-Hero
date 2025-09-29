function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let sarcharge = fare * 0.20;
    let total = fare + sarcharge + 30;
    return total;
}