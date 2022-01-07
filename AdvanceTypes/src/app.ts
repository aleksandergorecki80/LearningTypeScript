console.log('Advance types');

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Combined types - oba na raz
type ElevatedEmployee = Admin & Employee;

const elevatedEmployee_1: ElevatedEmployee = {
  name: 'John',
  privilages: ['create', 'edit'],
  startDate: new Date('10-10-22'),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Łączony typ jeden albo drugi
type UnknownEmployee = Admin | Employee;

function printEmployeeInformations(emp: UnknownEmployee) {
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
  load(name: string) {
    console.log(`Load some ${name}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.load('gruz');
  }
}

useVehicle(v1);
useVehicle(v2);

//
//
//
// Discriminated Unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horese {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horese;

function moveAnimal(animal: Animal) {
  let speed: number;
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

const papuga: Animal = {
  type: 'bird',
  flyingSpeed: 500,
};

const kon_1: Animal = {
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
  (userInputElement as HTMLInputElement).value = 'Hi there';
}

//
//
//
//       Index Properties

interface ErrorContainer {
  [prop: string]: string;
}

const error: ErrorContainer = {
  name: 'Missing name',
};

//
//
//
//      Function Overloads
function add_copy(a: number, b: number): number;
function add_copy(a: string, b: string): string;
function add_copy(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add_copy('John', 'Doe') as string;
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

console.log(fechedData?.job?.title);

//
//
//
//      Nullish Coalescing

const inputData = null;
const storedData = inputData ?? 'DEFAULT';
// ?? - oznacza że tylko null i undefined , nie wlicza empty strings

console.log(storedData);
