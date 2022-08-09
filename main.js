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

const reverseDate = (date) => {
  const newDate = date.split('-').reverse().join('.');
  console.log(newDate);
};

reverseDate('2020-11-26');

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
};

searchFunction('Rokoko Hotel');

// lesson 6

const palindrome2 = (str) => {
  const newStr2 = str.toLowerCase();
  return newStr2 === newStr2.split('').reverse().join('');
};

console.log(palindrome2('шалаш'));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const searchFunctionHotels6 = (str) => {
  const arr = [];

  hotels.forEach((item) => {
    const newStr = `${item.country}, ${item.city}, ${item.name}`;
    if (newStr.includes(str)) {
      arr.push(newStr);
    }
  });
  return arr;
};

console.log(searchFunctionHotels6('USA'));

const objCountries = hotels.reduce((acc, item) => {
  const result = { ...acc };
  if (!result[item.country]) {
    result[item.country] = [];
  }
  if (!result[item.country].includes(result[item.city])) {
    result[item.country].push(item.city);
  }
  return result;
}, {});

console.log(objCountries);
