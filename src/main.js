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

const vas = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < vas.length; i += 1) {
  if (vas[i] > 5 && vas[i] < 10) {
    console.log(vas[i]);
  }
}

for (let i = 0; i < vas.length; i += 1) {
  if (vas[i] % 2 === 0) {
    console.log(vas[i]);
  }
}
