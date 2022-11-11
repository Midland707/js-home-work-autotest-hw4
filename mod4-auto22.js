//MODUL4 AUTOTEST22

const userLoad =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// Change code below this line
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// Change code above this line

getUsersWithEyeColor(userLoad, "blue");
getUsersWithEyeColor(userLoad, "green");
getUsersWithEyeColor(userLoad, "brown");
getUsersWithEyeColor(userLoad, "red");

console.log("=== eyeColor is blue === ", getUsersWithEyeColor(userLoad, "blue"));
console.log("=== eyeColor is green === ", getUsersWithEyeColor(userLoad, "green"));
console.log("=== eyeColor is brown === ", getUsersWithEyeColor(userLoad, "brown"));
console.log("=== eyeColor is red === ", getUsersWithEyeColor(userLoad, "red"));

// Якщо значення параметра color - це "blue", функція повертає масив об'єктів 
// користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів 
// користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів 
// користувачів з іменами Blackburn Dotson і Sheree Anthony