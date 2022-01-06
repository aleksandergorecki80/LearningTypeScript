type AddFn = (a: number, b: number) => number;

const addTwoNumbers: AddFn = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name: string;
  outputName?: string; //  pytajnik oznacza ze jest opcjonalne property
}

interface Greetable extends Named {
  age: number;
  greet(phrase: string): void;
}

class Person implements Greetable {
  // <<< == class może implementować z więcej niż jeden intarface
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`Hello ${this.name} w ${phrase}`);
  }
}

const user_2: Greetable = new Person('All', 44);
user_2.greet('Gdzies');

console.log(user_2);
// user_2.name = 'KKi';     !! nie da się bo jest readonly

//  można zastosować bezpośrednio do obiektu
const user_1: Greetable = {
  name: 'Kki',
  age: 33,
  greet(phrase: string) {
    console.log(`Hello ${this.name} w ${phrase}`);
  },
};
