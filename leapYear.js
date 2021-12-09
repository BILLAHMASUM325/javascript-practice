
function learYear(year){
    

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
    return learYear;
}
learYear(1700);
console.log(learYear)