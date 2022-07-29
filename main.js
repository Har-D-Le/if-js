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

// lesson 3

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

// lesson 4

function sumLesson4(a) {
  return function (b) {
    return a + b;
  };
}

console.log('sum:', sumLesson4(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const p = document.querySelectorAll('p');
const makePainter = () => {
  let i = 0;
  return (e) => {
    e.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
};
p.forEach((item) => {
  const painter = makePainter();
  item.addEventListener('click', painter);
});

// lesson 5

const transformDate = (date) => {
  const arrayDate = date.split('-').reverse();
  for (let i = 0; i < arrayDate.length; i += 1) {
    const newDate = arrayDate.join('.');
    console.log(newDate);
    return newDate;
  }
};

transformDate('2020-11-26');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const searchFunction = (str) => {
  for (let i = 0; i < data.length; i += 1) {
    const arrayLesson5 = data[i].country + data[i].city + data[i].hotel;
    if (arrayLesson5.includes(str)) {
      console.log(data[i]);
    }
  }
  return;
};

searchFunction('Rokoko Hotel');
