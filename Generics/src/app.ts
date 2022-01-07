console.log('Generics');

//      Generics
const names: Array<string> = ['John', 'Doe'];
const names2: string[] = ['John', 'Doe'];

names[0].split(' ');
names2[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
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
function merge<T, U>(objA: T, objB: U) {
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
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: 'John' }, { age: 33 });

console.log(mergedObj2);
console.log(mergedObj2.name);
console.log(mergedObj2.age);

//
//
//

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got not value';
  if (element.length === 1) {
    descriptionText = 'Got one element';
  } else if (element.length > 1) {
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
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'John' }, 'name');

//
//
//
//
//    Generic Classes
//
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('John Doe');
textStorage.addItem('Doe');
textStorage.addItem('Bob');
textStorage.removeItem('Doe');
console.log(textStorage.getItems());

const numbersStorage = new DataStorage<number>();

//
//
//
//
//  Generic Utility Types
//

interface CourseGoal {
  title: string;
  description: string;
  compliteUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.compliteUntil = date;
  return courseGoal as CourseGoal;
  // return { title: title, description: description, compliteUntil: date };
}

//
//
//
//
//
//     Generic Types vs Union Types
//
