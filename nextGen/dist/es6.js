"use strict";
console.log('hello world');
const person = {
    name: 'Bonifacy',
    race: 'kot',
};
const person2 = Object.assign({}, person);
person2.race = 'pies';
console.log(person);
console.log(person2);
const add = (...numbers) => {
    // sumuje przekazane wartosci, wkłada je do tabeli
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(2, 8, 4.1);
console.log(addedNumbers);
//# sourceMappingURL=es6.js.map