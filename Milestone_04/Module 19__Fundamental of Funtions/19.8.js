/**
    <--- SUM OF ALL NUMBERS IN AN ARRAY USING FUNCTION --->
 */


/**
 function sumOfNumbers(numbers) {
        let sum = 0;
        console.log(numbers);
        for(const number of numbers) {
            console.log(number);
            sum = sum + number;
        }
        return sum;
    }
    const  numbs = [54, 62, 12, 6];
    const sum = sumOfNumbers(numbs);
    console.log('Sum of numbers is', sum);
*/
