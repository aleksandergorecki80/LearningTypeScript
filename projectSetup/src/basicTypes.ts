function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(`${phrase} ${result}`);
    return;
  } else {
    return n1 + n2;
  }
}

const number_one = 5;
const number_two = 7;
const printResult = true;
const phrase = 'Result is:';

const result = add(number_one, number_two, printResult, phrase);

console.log(result);

// CAN BE DONE THAT WAY, RATHER IT IS NOT
const person: {
  name: string;
  age: number;
} = {
  name: 'Aleks',
  age: 41,
};

// GOOD PRACTICE
const person_correct = {
  name: 'Aleks',
  age: 41,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

for (const hobby of person_correct.hobbies) {
  console.log(hobby);
}

//  !! INCORECT !!
// person.adress = '55 foxcote Close';
// console.log(person.nickname);

//      ENUM        //

enum Role {
  ADMIN,
  AUTHOR,
  EDYTOR,
}

const another_person = {
  name: 'Bob',
  age: 41,
  hobbies: ['Zbieranie znaczków', 'Singing'],
  role: Role.ADMIN,
};

if (another_person.role === Role.ADMIN) {
  console.log('The role is Admin');
}

//      UNION TYPES     //
function combine(input1: number | string, input2: string) {
  const result = input1 + input2;
  return result;
}

console.log(combine(100, 'dwa'));
console.log(combine('sto', 'dwa'));

///   LITERAL TYPES   ///
function combine_two(
  input1: number | string,
  input2: string
  // resultConversion: 'as-number' | 'as-text' // LITERAL TYPE
) {
  const result = input1 + input2;
  return result;
}

//      Type Aliases / Custom Types     //
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//  26. Function Return Types & "void"  //
function add_three(n1: number, n2: number): number {
  return n1 + n2;
}

function print_result(n1: number, n2: number) {
  console.log(n1 + n2);
}

// Functions as Types

let combine_values: (a: number, b: number) => number;

combine_values = add_three;
// combine_values = 4;      <- błąd

console.log(combine_values(4, 5));

// 28. Function Types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (num) => {
  console.log(`Wynik dodawania: ${num}`);
});

// 29. The "unknown" Type

let userType: unknown;
let userName: string;

userType = 5;
userName = 'Max';
// userName = userType;   <- BŁĄD

// 30. The "never" Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occur', 500);
