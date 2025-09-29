/**
    <--- DIFFERENT TYPES OF PARAMETERS FOR A FUNCTION --->
 */


/**
// for a given string tell me whether is has even number of characters or not

function evenSizedString (str) {
    const size = str.length;
    console.log(str, size);
    if(size % 0 === 0) {
        console.log('even size');
        return true;
    } else {
        console.log('odd size');
        return false;
    }

}
// evenSizedString('Dhaka')
// evenSizedString('faka')


function numberOfElement (numbers) {
    const len = numbers.length;
    console.log(len);
    return len;
}
numberOfElement([12,45,78,45,121254,4,5])

function getAge(person) {
    const age = person.age;
    console.log(age);
    return age;
}
 */

