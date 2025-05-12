//1
let age: number = 50;

let Name: string = 'Max';

let toggle: boolean = true;

let empty: null = null;

let notInitialize: undefined = undefined;

let callback = (a: number): number => { 
    return 100 + a 
};

console.log(age);
console.log(Name);
console.log(toggle);
console.log(empty);
console.log(notInitialize);
console.log(callback(7));


//2

let anything: any = -20;

anything = 'Text';

anything = {};

console.log(anything);

//3

let some: unknown;

some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

console.log(some);

//4

const person:[string, number]= ['Max', 21];

console.log(person);

//5

enum Status {
  LOADING,
  READY,
}

//6

let union: string | number;

union = "something";
union = 51;

console.log(union);

//7

let one: 'enable' | 'disable';
one = 'enable';

console.log(one);

//8

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

console.log(showMessage("homework"));
console.log(calc(7, 3));
console.log(customError);
//9

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {};
};
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

console.log(page1);
console.log(page2);