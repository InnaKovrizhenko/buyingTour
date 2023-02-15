//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

// let number = prompt("Введіть число більше 100");
// while (number < 100) {
//   if (number === "" || number === null) {
//     break;
//   }
//   number = prompt("Введіть число ще раз");
// }

//* Example 1 - Базові операції з масивом// Створіть масив genres з елементами «Jazz» та «Blues».// Додайте «Рок-н-рол» до кінця.// Виведіть у консоль перший елемент масиву.// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.// Видаліть перший елемент та виведіть його в консоль.// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");
// console.log(genres[genres.push("Рок-н-рол") - 1]);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift(0));

// genres.unshift("Country", "Reggae");
// console.log(genres);

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
// const fruits = [":яблоко:", ":виноград:", ":персик:", ":банан:", ":лимон:"]

// const fruits = ["яблоко", "виноград", "персик", "банан", "лимон"];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

//* Example 4 - Масиви та цикли// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова // const names = "Jacob,William,Solomon,Artemis";// const phones = "89001234567,89001112233,890055566377,890055566300";

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// console.log(namesArray);
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
// console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   }
// }
// calculator.read(2,5);
// console.log(calculator.sum());
// console.log(calculator.mult());

// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// function updateObject (obj, ...rest){

// const value = {}

//     for (const key of Object.keys(obj)) {
//         // console.log(key)
//         if (!rest.includes(key)) {
//            value[key] = obj[key]
//         }
// }
// return value
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'))

// function updateObject (obj, ...rest){

//   const value = {...obj}

//       for (const key of Object.keys(obj)) {
//           // console.log(key)
//           if (rest.includes(key)) {
//           delete value[key]
//           }
//   }
//   return value
//   }

//   console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'))

//   const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// // Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати

// function reverse(arr) {
//     const reversArray = [];

//     for (let i = arr.length - 1; i >= 0; i -= 1){
//         reversArray.push(arr[i]);
//     }

// return reversArray;
// }

// console.log(reverse(arrNumber));

// const reverse2 = (array) => array.map((el, index, givenArr) => givenArr[givenArr.length - 1 - index])

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// Напишіть функцію, яка повертає об"єкт, який складається зі значень вкладених масивів. Перше значення - ключ, друге - значення
// Результат, що очікується  [['a', 1], ['b', 2]] => { a: 1, b: 2 }

// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без 1, 2 => [3]

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується[1, 2, 3, 1, 2] => [1, 2, 3]

// Реалізуй функцію, яка приймає тип String або Number і повертає масив з протилежним типом даних:

// console.log(convert('1', 2, 3, '4')); // [1, '2', '3', 4]

// function convert(...args) {
//   let array = [];
//   for (const arg of args) {
//     if (typeof arg === 'string') {
//       array.push(Number(arg));
//     } else {
//       array.push(String(arg));
//     }
//   }

//   return array;
// }
// console.log(convert(1, '2', '3', 4));

// // Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и
// // строку с названием камня. Функция считает и возвращает общую стоимость камней
// // с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let total = 0;
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       total = stone.price * stone.quantity;
//     }
//   }
//   return total;
// }
// console.log(calcTotalPrice(stones, "Бриллиант"));

// connectArrays;
// [1, 4, 6][(4, 19, "a")];

// function connectArrays(array1, array2) {
//   let array3 = array1.concat(array2);
//   return array3;
// }
// console.log(connectArrays([1, 4, 6], [4, 19, "a"]));

// persons = [
//   {
//     id: 325326,
//     firstname: "Dan",
//     lastname: "Tiger",
//     image: "url",
//     birthday: "03.18.1990",
//     gender: "Male",
//     hobbie: ["Football", "Reading"],
//     nationality: "switzerland",
//     friends: [325330, 325334],
//     residence: 10041,
//     age: 20,
//   },
//   {
//     id: 325326,
//     firstname: "Fan",
//     lastname: "Tiger",
//     image: "url",
//     birthday: "03.18.2005",
//     gender: "Male",
//     hobbie: ["Football", "Reading"],
//     nationality: "switzerland",
//     friends: [325330, 325334],
//     residence: 10041,
//     age: 25,
//   },
//   {
//     id: 325330,
//     firstname: "Frank",
//     lastname: "Lion",
//     image: "url",
//     birthday: "10.05.1991",
//     gender: "male",
//     hobbie: ["walking", "basketball"],
//     nationality: "syria",
//     friends: ["", "", ""],
//     residence: 10041,
//     age: 30,
//   },
//   {
//     id: 325334,
//     firstname: "Bilal",
//     lastname: "Zakki",
//     image: "url",
//     birthday: "08.19.1999",
//     gender: "male",
//     hobbie: ["swimming", "walking"],
//     nationality: "canda",
//     friends: [325330, 325326],
//     residence: 10012,
//     age: 35,
//   },
// ];

// function getFullname(person) {
//   return person.firstname + " " + person.lastname;
// }

// // console.log(getFullname(persons[2]));

// function getAllFullnames(persons) {
//   const people = [];

//   for (const person of persons) {
//     const names = getFullname(person);
//     people.push(names);
//   }
//   return people;
// }

// console.log(getAllFullnames(persons));

// function findPerson(firstname, lastname, persons) {
//   for (const person of persons) {
//     if (person.firstname === firstname && person.lastname === lastname) {
//       return person;
//     }
//   }
//   return "Не найден";
// }

// console.log(findPerson("Frank", "none", persons));

// function average(persons) {
//   let total = 0;
//   for (let i = 0; i < persons.length; i += 1) {
//     total = total + persons[i].age;
//   }

//   let averages = total / persons.length;
//   return averages;
// }

// console.log(average(persons));

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority)

// class Notes {
//   constructor(items) {
//     this.items = items;
//   }

//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   getItems = () => this.items;

//   addNote = (note) => {
//     this.items.push(note);
//   };

//   removeNote = (text) => {
//     this.items = this.items.filter((note) => note.text !== text);
//   };

//   updatePriority = (text, newPriority) => {
//     this.items = this.items.map((note) => {
//       if (note.text === text) {
//         note.priority = newPriority;
//       }
//       return note;
//     });
//   };
// }

// const myNote = new Notes([]);

// console.log(myNote.getItems());

// myNote.addNote({ text: `1`, priority: Notes.Priority.LOW });
// myNote.addNote({ text: `2`, priority: Notes.Priority.LOW });

// console.log(myNote.getItems());

// // myNote.removeNote(`1`);
// // console.log(myNote.getItems());

// myNote.updatePriority(`1`, Notes.Priority.NORMAL);
// console.log(myNote.getItems());

// const cars = [
//   {
//     make: "Honda",
//     modcar: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     modcar: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     modcar: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     modcar: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     modcar: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     modcar: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     modcar: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     modcar: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     modcar: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     modcar: "Explorer",
//     type: "suv",
//     amount: 10,
//     price: 31660,
//     onSale: false,
//   },
// ];

//* Example 1 - Метод map
// Нехай функція getModcars повертає масив моделей (поле modcar) всіх автомобілів.

// const getModcars = (cars) => cars.map((el) => el.modcar);

// console.table(cars);
// getModcars(cars);
// console.table(getModcars(cars));

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// function makeCarsWithDiscount(cars, discount) {

//   return cars.map((car) => (car.price = car.price - car.price * discount));
// }

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((el) => {
//     return el.price < threshold;
//   });
// };

// filterByPrice(cars, 25000);
// console.table(filterByPrice(cars, 25000));

//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// function getCarsWithDiscount(cars) {
//   return cars.filter(({ onSale }) => onSale === true);
// }

// console.table(getCarsWithDiscount(cars));

//* Example 6 - Метод find
// Нехай функція getCarByModel повертає обьект автомобіля модель якої дорівнює значенню властивості modcar

// function getCarByModel(cars, modcar) {
//   return cars.find(({ modcar }) => modcar === modcar);
// }

// console.table(getCarByModel(cars, "CX-9"));

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// function sortByAscendingAmount(cars) {
//   return [...cars].sort(
//     (firstCar, secondCar) => firstCar.amount - secondCar.amount
//   );
// }

// console.table(sortByAscendingAmount(cars));

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// function getTotalAmount(cars) {
//   return cars.reduce((totalAmount, car) => totalAmount + car.amount, 0);
// }

// console.table(getTotalAmount(cars));

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// function getAvailableCarNames(cars) {
//   return cars.filter((el) => el.onSale === true).map((el) => el.modcar);
// }

// console.table(getAvailableCarNames(cars));

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// function getSortedCarsOnSale(cars) {
//   return cars
//     .filter((car) => car.onSale)
//     .sort((firstCar, secondCar) => firstCar.price - secondCar.price);
// }

// console.table(getSortedCarsOnSale(cars));

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

const registrationLogin = prompt(`Реєстрація: Введіть логін`);
const registrationPassword = prompt(`Реєстрація: Введіть пароль`);

const User = {
  login: registrationLogin,
  pass: registrationPassword,
};

let userName = "";
do {
  userName = prompt(`Авторизація: Введіть Ваш логін`);
} while (userName !== User.login);
console.log("Логін успішний");

let userPass = "";
do {
  userPass = prompt(`Авторизація: Введіть Ваш пароль`);
} while (userPass !== User.pass);

const findAvailableCountry = (inputSum) =>
  countries.filter((el, index) => countriesPrice[index] <= inputSum);

let userCredits = prompt(
  `Введіть максимальну суму, яку Ви готові витратити на тур`
);
const resultForAlert = findAvailableCountry(userCredits);

alert("Список доступних країн:  " + resultForAlert);

let userCountry = prompt("Яку країну Ви обрали?");

function byuTour(arrayCountries, arrayPrices, inputCountry, userCash) {
  let balance = 0;
  for (let i = 0; i < arrayCountries.length; i += 1) {
    if (arrayCountries[i] === inputCountry) {
      balance = userCash - arrayPrices[i];
    }
  }
  return balance;
}
const balanceForAlert = byuTour(
  countries,
  countriesPrice,
  userCountry,
  userCredits
);

alert("Тур оплачений, залишок на Вашому рахунку:  " + balanceForAlert);

// let userName;
// let userPass;
// let userCredits;
// let userCountry;
// let maxPrice;

// const ganres = [
//   { id: 28, name: "Action" },
//   { id: 12, name: "Adventure" },
//   { id: 16, name: "Animation" },
//   { id: 35, name: "Comedy" },
//   { id: 80, name: "Crime" },
//   { id: 99, name: "Documentary" },
//   { id: 18, name: "Drama" },
//   { id: 10751, name: "Family" },
//   { id: 14, name: "Fantasy" },
//   { id: 36, name: "History" },
//   { id: 27, name: "Horror" },
//   { id: 10402, name: "Music" },
//   { id: 9648, name: "Mystery" },
//   { id: 10749, name: "Romance" },
//   { id: 878, name: "Science Fiction" },
//   { id: 10770, name: "TV Movie" },
//   { id: 53, name: "Thriller" },
//   { id: 10752, name: "War" },
//   { id: 37, name: "Western" },
// ];

// const moviesTypes = [35, 99, 36, 878, 37];

// Получается надо написать функцию, которая будет принимать массив, и сравнивать его значения со всеми id в обьекте, и пушить в новый массив значение name.

// const filterId = (allGanres, newMoviesArray) =>
//   allGanres.filter((el) => newMoviesArray.includes(el.id)).map((el) => el.name);

// console.log(filterId(ganres, moviesTypes));

// function compareGenresId(allGenres, filmGenre) {
//   const ArrayOfGenres = [];
//   allGenres.forEach((el) => {
//     if (filmGenre.includes(el.id)) {
//       ArrayOfGenres.push(el.name);
//     }
//   });
//   return ArrayOfGenres;
// }
