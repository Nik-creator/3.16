// массив
// const lengths = arr.map(item => item.length);

// .map() - возвращает новый массив
// const arr = ["Apple", "Banana", "Melon"]
// const arr = [1, 2, 3, 4, 5]

const characters = [
  {
    id: 1,
    name: 'Rick',
  },
  {
    id: 2,
    name: 'Morty',
  },
  {
    id: 3,
    name: 'Nikita',
  },
];

// filter
// const newArr = arr.filter((item) => item > 3);

// find
// const element = characters.find((item) => item.id === 2);

// reduce
// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, item) => {
//   return acc + item
// }, 0);

// forEach
// characters.forEach(({ id, name }) => {
//   console.log(`id: ${id}, name: ${name}`);
// });

// Объект

const obj = {
  name: 'Alex',
  age: 5,
};

Object.values(obj).forEach((item) => {
  // console.log(item);
});

Object.keys(obj).forEach((item) => {
  // console.log(item);
});

Object.entries(obj).forEach(([key, value]) => {
  // console.log(`${key}, ${value}`);
});

for (const key in obj) {
  obj[key];
}
