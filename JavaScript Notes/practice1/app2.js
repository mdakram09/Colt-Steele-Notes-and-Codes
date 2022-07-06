// objects starts
const myobj = {
  brand: 'mi',
  price: 1999,
  screenSize: 2.5,
  isFitBand: true,
  workoutModes: ['running', 'walking', 'climbing'],
  properties: {
    isGood: true,
    discount: 200,
    parentBrand: 'xiomi',
  },
  add(x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  takeFullName() {
    console.log(`${this.brand} ${this.price}`);
  },
};
myobj.takeFullName();
console.log(myobj);
// console.table(myobj);
console.log(myobj.add(2, 3));
console.log(myobj.multiply(2, 3));
console.log(myobj.divide(4.4, 2.0));

myobj.properties.discount += 100;

console.log(myobj);

const colorPallate = {
  blue: '#blueblue',
  red: '#redred',
  white: '#ffffff',
};

console.log(colorPallate['red']);
colorPallate['red'] = '#bloodRed';
console.log(colorPallate['red']);
// objects ends

// Function starts
function fullName(fname, lname) {
  console.log(`This is ${fname} ${lname}`);
}

fullName('Md Akram', 'Khan');
fullName('Akash', 'Sharma');
fullName('Tathir', 'Raza');

const greet = (fname, lname = 'khan') => {
  console.log(`This is ${fname} ${lname}`);
};

greet('Salman', 'Khan');
greet('Tahira');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((el) => {
  console.log('square: ' + el ** 2);
});

arr.forEach((el) => {
  if (el % 2 == 0) {
    console.log(el + ' is even');
  }
});

console.log(arr);

arr.map((a) => {
  console.log(a ** 2);
});

const squareMe = arr.map((a) => {
  return a ** 2;
});

console.log(squareMe);

// spread operator starts
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log(Math.max(...num1));

const num3 = [...num1, ...num2];
console.log(num3);

for (let n of num3) {
  console.log(n ** 2);
}

const [first, second, third] = num3;
console.log(first);
console.log(second);
console.log(third);

function squreIt(...num3) {
  for (let n of num3) {
    console.log(n ** 2);
  }
}

squreIt(...num3);

const dog = {
  name: 'Rusty',
  breed: 'German',
  canWalk: true,
};

const cat = {
  CatName: 'Malina',
  CatBreed: 'Indian',
  CatCanWalk: false,
};

const animals = {
  ...dog,
  allAreAnimals: true,
  ...cat,
};

console.log(animals);

for (let n in animals) {
  console.log(n + ' ' + animals[n]);
}

const { name, breed, canWalk } = animals;
console.log(name);
console.log(breed);
console.log(canWalk);
