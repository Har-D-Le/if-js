// lesson 10

const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const homesSection = document.createElement('section');
homesSection.className = 'homes';
document.body.append(homesSection);

const homesContainer = document.createElement('div');
homesContainer.className = 'container';
homesSection.append(homesContainer);

const homesTitle = document.createElement('h2');
homesTitle.className = 'homes-h2';
homesTitle.innerHTML = 'Homes guests loves';
homesContainer.append(homesTitle);

const homesContent = document.createElement('div');
homesContent.className = 'col-12 col-ss-6 homes-content';
homesTitle.after(homesContent);

const pasteItems = (data) => {
  let newData = [];
  const currentWidth = window.screen.width;
  if (currentWidth < 768) {
    newData = data.slice(0, 2);
  } else {
    newData = data.slice(0, 4);
  }

  newData.forEach((item) => {
    const homesContentItem = document.createElement('div');
    homesContentItem.className = 'col-3 col-ss-3 homes-content-wrap';
    homesContent.append(homesContentItem);

    const homesContentItemImg = document.createElement('img');
    homesContentItemImg.className = 'homes-img';
    homesContentItemImg.setAttribute('src', `${item.imageUrl}`);
    homesContentItemImg.setAttribute('alt', `${item.name}`);
    homesContentItem.append(homesContentItemImg);

    const homesContentItemName = document.createElement('div');
    homesContentItemName.className = 'homes-item';
    homesContentItemName.innerHTML = `${item.name}`;
    homesContentItemImg.after(homesContentItemName);

    const homesContentItemCountry = document.createElement('div');
    homesContentItemCountry.className = 'homes-item-location';
    homesContentItemCountry.innerHTML = `${item.city}, ${item.country}`;
    homesContentItemName.after(homesContentItemCountry);
  });
};

pasteItems(data);

// lesson 11

const peopleInput = document.querySelector('.rooms');
const filter = document.querySelector('.contextMenu');
const adultsValue = document.querySelector('#adults');
const childrenValue = document.querySelector('#children');
const roomValue = document.querySelector('#room');
const btnAdultsDec = document.querySelector('#btnAdultsDec');
const btnAdultsInc = document.querySelector('#btnAdultsInc');
const btnChildrenDec = document.querySelector('#btnChildrenDec');
const btnChildrenInc = document.querySelector('#btnChildrenInc');
const btnRoomsDec = document.querySelector('#btnRoomsDec');
const btnRoomsInc = document.querySelector('#btnRoomsInc');
const contextMenuBottom = document.querySelector('#contextMenuBottom');
const childrenSelect = document.querySelector('.contextMenu-selector');

let filterValues = {
  adults: 1,
  children: 0,
  rooms: 1,
};
const focusFilter = () => {
  filter.classList.toggle('visible');
};

peopleInput.addEventListener('click', focusFilter);

adultsValue.value = filterValues.adults;
childrenValue.value = filterValues.children;
roomValue.value = filterValues.rooms;

const setFuncAttribute = () => {
  peopleInput.setAttribute(
    'placeholder',
    `${filterValues.adults}` +
      ' ' +
      'Adults' +
      ' - ' +
      `${filterValues.children}` +
      ' ' +
      'Children' +
      ' - ' +
      `${filterValues.rooms}` +
      ' ' +
      'Rooms',
  );
};
setFuncAttribute();

const btnFuncInc = (mode) => {
  if (mode === 'adults') {
    filterValues = { ...filterValues, adults: filterValues.adults + 1 };
    adultsValue.value = filterValues.adults;
    setFuncAttribute();
    if (adultsValue.value >= 30) {
      btnAdultsInc.disabled = true;
    } else {
      btnAdultsDec.disabled = false;
    }
  }
  if (mode === 'children') {
    filterValues = { ...filterValues, children: filterValues.children + 1 };
    childrenValue.value = filterValues.children;
    setFuncAttribute();
    if (childrenValue.value > 0) {
      contextMenuBottom.style.display = 'block';
    }
    if (childrenValue.value > 1) {
      console.log(childrenSelect);
      const select = childrenSelect.cloneNode(true);
      select.classList.add('contextMenu-selector');
      contextMenuBottom.append(select);
    }
    if (childrenValue.value >= 10) {
      btnChildrenInc.disabled = true;
    } else {
      btnChildrenDec.disabled = false;
    }
  }
  if (mode === 'rooms') {
    filterValues = { ...filterValues, rooms: filterValues.rooms + 1 };
    roomValue.value = filterValues.rooms;
    setFuncAttribute();
    if (roomValue.value >= 30) {
      btnRoomsInc.disabled = true;
    } else {
      btnRoomsDec.disabled = false;
    }
  }
};

const btnFuncDec = (mode) => {
  if (mode === 'adults') {
    filterValues = { ...filterValues, adults: filterValues.adults - 1 };
    adultsValue.value = filterValues.adults;
    setFuncAttribute();
    if (adultsValue.value <= 1) {
      btnAdultsDec.disabled = true;
    } else {
      btnAdultsInc.disabled = false;
    }
  }
  if (mode === 'children') {
    filterValues = { ...filterValues, children: filterValues.children - 1 };
    childrenValue.value = filterValues.children;
    setFuncAttribute();
    if (childrenValue.value < 1) {
      contextMenuBottom.style.display = 'none';
    } else {
      const select = document.querySelector('.contextMenu-selector');
      select.remove();
    }
    if (childrenValue.value <= 0) {
      btnChildrenDec.disabled = true;
    } else {
      btnChildrenInc.disabled = false;
    }
  }
  if (mode === 'rooms') {
    filterValues = { ...filterValues, rooms: filterValues.rooms - 1 };
    roomValue.value = filterValues.rooms;
    setFuncAttribute();
    if (roomValue.value <= 1) {
      btnRoomsDec.disabled = true;
    } else {
      btnRoomsInc.disabled = false;
    }
  }
};

btnAdultsInc.addEventListener('click', () => btnFuncInc('adults'));
btnAdultsDec.addEventListener('click', () => btnFuncDec('adults'));

btnChildrenInc.addEventListener('click', () => btnFuncInc('children'));
btnChildrenDec.addEventListener('click', () => btnFuncDec('children'));

btnRoomsInc.addEventListener('click', () => btnFuncInc('rooms'));
btnRoomsDec.addEventListener('click', () => btnFuncDec('rooms'));
