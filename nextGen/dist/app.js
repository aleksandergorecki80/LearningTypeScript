"use strict";
const addTwoNumbers = (a, b) => {
    return a + b;
};
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`Hello ${this.name} w ${phrase}`);
    }
}
const user_2 = new Person('All', 44);
user_2.greet('Gdzies');
console.log(user_2);
// user_2.name = 'KKi';     !! nie da się bo jest readonly
//  można zastosować bezpośrednio do obiektu
const user_1 = {
    name: 'Kki',
    age: 33,
    greet(phrase) {
        console.log(`Hello ${this.name} w ${phrase}`);
    },
};
//# sourceMappingURL=app.js.map