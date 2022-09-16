
// Циклы

// While()

let i = 0;

while(i < 10) {
  // alert(i);
  i++; // инкремент
}

// for()

for(let i = 0; i < 10; i++) {
  console.log(i);
};


// Функции

// Function Declaration

function getName(name) {
  return name;
};

// Function Expression

const getAnotherName = (name) => {
  return name;
};

// Стрелочные функции можем записывать в одну строку, опуская фигурные скобки

const checkValue = () => true;

// в функции checkValue мы опускаем скобки и метод return, тк при написании в одну строчку после стрелочки
// => функция сама вернет значения, без явного указания с помощью метода return;

// Function Declaration - функции мы можем вызывать до их инициализации

console.log(calcSum(1, 4)); // 5 - ошибки не будет

function calcSum(a, b) {
  return a + b;
};

// Тернарный оператор в шаблонной строке

const getNameStr = (firstName, age) => {
  return `Мне зовут ${firstName}. Мне ${age} ${age >= 5 ? 'лет' : 'года'}`;
};

console.log(getNameStr('Никита', 5));


// Методы

alert('Вывод пользователю сообщение');

const message = prompt('Диалоговое окно с пользователем');
