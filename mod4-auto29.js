//MODUL4 AUTOTEST29

const loadUsers = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Change code below this line
const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);
// Change code above this line

getUserWithEmail(loadUsers, "shereeanthony@kog.com");
getUserWithEmail(loadUsers, "elmahead@omatom.com");
getUserWithEmail(loadUsers, "blackburndotson@furnigeer.com");
getUserWithEmail(loadUsers, "vasylko@kog.com");

console.log(
  "=== Find email - shereeanthony@kog.com ===",
  getUserWithEmail(loadUsers, "shereeanthony@kog.com")
);
console.log(
  "=== Find email - elmahead@omatom.com ===",
  getUserWithEmail(loadUsers, "elmahead@omatom.com")
);
console.log(
  "=== Find email - blackburndotson@furnigeer.com ===",
  getUserWithEmail(loadUsers, "blackburndotson@furnigeer.com")
);
console.log(
  "=== Find email - vasylko@kog.com ===",
  getUserWithEmail(loadUsers, "vasylko@kog.com")
);

// ?????????????? ?????????????? getUserWithEmail(users, email)
// ?????????? ??????????, ?????? ???????? ?????????????????? ????'?????? ??????????????????????, ?????????? ?????????? (?????????????????????? email) ???????????????????? ???? ?????????????????? ?????????????????? email.

// ???????? ???????????????? ?????????????????? email - ???? "shereeanthony@kog.com", ?????????????? ???????????????? ????'?????? ?????????????????????? ?? ????'???? Sheree Anthony
// ???????? ???????????????? ?????????????????? email - ???? "elmahead@omatom.com", ?????????????? ???????????????? ????'?????? ?????????????????????? ?? ????'???? Elma Head
// ???????? ???????????????? ?????????????????? email - ???? "blackburndotson@furnigeer.com", ?????????????? ???????????????? ????'?????? ?????????????????????? ?? ????'???? Blackburn Dotson
// ???????? ?? ???????????? users ?????????????????? ???????????????????? ?? ???????????? ???? ?????????????????? email, ?????????????? ???????????????? undefined
