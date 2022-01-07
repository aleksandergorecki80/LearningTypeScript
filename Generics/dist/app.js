"use strict";
console.log('Generics');
//      Generics
const names = ['John', 'Doe'];
const names2 = ['John', 'Doe'];
names[0].split(' ');
names2[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
        reject('Error');
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
//
//
//
//      Generic Function
//
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'John' }, { age: 33 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
//
//
//
//      Working with Constraints
//
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: 'John' }, { age: 33 });
console.log(mergedObj2);
console.log(mergedObj2.name);
console.log(mergedObj2.age);
function countAndDescribe(element) {
    let descriptionText = 'Got not value';
    if (element.length === 1) {
        descriptionText = 'Got one element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
//
//
//
//    The "keyof" Constraint
//
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
extractAndConvert({ name: 'John' }, 'name');
//
//
//
//
//    Generic Classes
//
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('John Doe');
textStorage.addItem('Doe');
textStorage.addItem('Bob');
textStorage.removeItem('Doe');
console.log(textStorage.getItems());
const numbersStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.compliteUntil = date;
    return courseGoal;
    // return { title: title, description: description, compliteUntil: date };
}
//
//
//
//
//
//     Generic Types vs Union Types
//
//# sourceMappingURL=app.js.map