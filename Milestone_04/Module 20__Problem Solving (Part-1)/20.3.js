/**
    <--- 20-3 Check whether a year is a Leap Year or not --->
*/


/**
    LEAP YEAR RULES:
    1. ১০০ দ্বারা অবিভাজ্য এবং ৪ দ্বারা বিভাজ্য হতে হবে।
    2. ৪০০ দ্বারা বিভাজ্য হতে হবে।
*/

function isLeapYear (year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
