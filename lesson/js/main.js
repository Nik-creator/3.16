// простые

const number = 8;
const boolean = false;

const myName = 'Nikita';

const empty = undefined;
const nullable = null;

const str1 = 'str1';
const str3 = `${numb} ${myName}`;


// сложные

const array = ['1', 2, 3, function(){}];

const man = {
  name: 'nikita',
  age: 4,
  adult: false,
  //...
};


// '' => false
// undefined => false
// null => false
// 0 => false
// {} => true
// [] => true



if (number) {
  console.log('истина');
} else {
  console.log('ложь');
}

