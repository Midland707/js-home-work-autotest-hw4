//MODUL4 AUTOTEST35

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((playTime, time) => {
  return playTime + time.playtime / time.gamesPlayed;
}, 0);
console.log("totalAveragePlaytimePerGame = ", totalAveragePlaytimePerGame);

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//     і отримати загальну суму цих значень часу.
//     Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).
// totalAveragePlaytimePerGame - це число 1023
