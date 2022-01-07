"use strict";
var _a;
console.log('Advance types');
const elevatedEmployee_1 = {
    name: 'John',
    privilages: ['create', 'edit'],
    startDate: new Date('10-10-22'),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformations(emp) {
    console.log(emp.name);
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformations(elevatedEmployee_1);
//  INSTANCE OF
class Car {
    drive() {
        console.log('drive a car');
    }
}
class Truck {
    drive() {
        console.log('drive a truck');
    }
    load(name) {
        console.log(`Load some ${name}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load('gruz');
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`The animal runs with ${speed} per hour`);
}
const papuga = {
    type: 'bird',
    flyingSpeed: 500,
};
const kon_1 = {
    type: 'horse',
    runningSpeed: 7000,
};
moveAnimal(papuga);
moveAnimal(kon_1);
//
//
//
//      Type Casting
const pharagraph = document.querySelector('p');
// const inputElement = <HTMLInputElement>(
//   document.getElementById('input-element')!
// );
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const error = {
    name: 'Missing name',
};
function add_copy(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add_copy('John', 'Doe');
result.split(' ');
//
//
//
//      Optional Chaining
const fechedData = {
    id: 'u1',
    name: 'John',
    job: { title: 'Seller', place: 'Supermarket' },
};
console.log((_a = fechedData === null || fechedData === void 0 ? void 0 : fechedData.job) === null || _a === void 0 ? void 0 : _a.title);
//
//
//
//      Nullish Coalescing
const inputData = null;
const storedData = inputData !== null && inputData !== void 0 ? inputData : 'DEFAULT';
// ?? - oznacza że tylko null i undefined , nie wlicza empty strings
console.log(storedData);
//# sourceMappingURL=app.js.map