function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

const checkLeapYear = isLeapYear(2000);

if (checkLeapYear) {
    console.log("The year is a leap year");
}
else {
    console.log("The year is not a leap year");
}