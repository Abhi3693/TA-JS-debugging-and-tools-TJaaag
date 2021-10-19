function getFullNme(firstName, lastName) {
    return firstName + " " + lastName;
}

let result = getFullNme("Arya", "Stark");

let expected = "Arya Stark";

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

result = getFullNme("John", "Snow");

expected = "John Snow";

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}







function getTotalAmount(amount, taxRate) {
    return amount + ((amount * taxRate)/100);
}


result = getTotalAmount(1000, 5);

expected = 1050;

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

result = getTotalAmount(100000, 5);

expected = 105000;

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}