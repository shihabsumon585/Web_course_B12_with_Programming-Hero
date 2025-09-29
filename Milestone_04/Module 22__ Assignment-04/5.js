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