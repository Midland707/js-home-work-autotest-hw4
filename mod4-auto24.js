//MODUL4 AUTOTEST24

const loadUsers = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

// Change code below this line
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// Change code above this line


getUsersWithFriend(loadUsers, "Briana Decker");
getUsersWithFriend(loadUsers, "Goldie Gentry");
getUsersWithFriend(loadUsers, "Adrian Cross");

console.log("=== friendName - це рядок Briana Decker === ", getUsersWithFriend(loadUsers, "Briana Decker"));
console.log("=== friendName - це рядок Goldie Gentry === ", getUsersWithFriend(loadUsers, "Goldie Gentry"));
console.log("=== friendName - це рядок Adrian Cross === ", getUsersWithFriend(loadUsers, "Adrian Cross"));

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив
// користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається 
// у властивості friends.
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив