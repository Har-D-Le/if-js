let user = 'John Doe';

console.log(user);

const student = 'Dmitry Komzolov';

console.log(student);

user = student;

console.log(user);

let test = 1;

test += 1;

console.log(test - '1');

test -= 1;

console.log(test);

console.log(!test);

const arr = [2, 3, 5, 8];
let sum = 1;

for (let i = 0; i < arr.length; i += 1) {
  sum *= arr[i];
}

console.log(sum);

const arrOfNumber = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrOfNumber.length; i += 1) {
  if (arrOfNumber[i] > 5 && arrOfNumber[i] < 10) {
    console.log(arrOfNumber[i]);
  }
}

for (let i = 0; i < arrOfNumber.length; i += 1) {
  if (arrOfNumber[i] % 2 === 0) {
    console.log(arrOfNumber[i]);
  }
}

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(4, 7));

const max = function (a, y) {
  if (a > y) {
    return a;
  }
  return y;
};

console.log(max(100, 98));

const maxTwo = (c, d) => (c > d ? c : d);

console.log(maxTwo(101, 22));

const palindrome = (str) => {
  const newStr = str.toLowerCase();
  return newStr === newStr.split('').reverse().join('');
};

console.log(palindrome('мадам'));
console.log(palindrome('пёс'));

function getRandomIntInclusive(minRan, maxRan) {
  return Math.floor(Math.random() * (maxRan - minRan + 1) + minRan);
}

const randomArr = [];

for (let i = 0; i < 10; i += 1) {
  const randomNum = getRandomIntInclusive(0, 100);
  randomArr.push(randomNum);
}

const replaceToZero = (arrReplacement) => {
  const newStr = arrReplacement.toString();
  console.log(newStr.replaceAll('0', 'zero').split(','));
};

replaceToZero(randomArr);
