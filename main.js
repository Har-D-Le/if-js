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
