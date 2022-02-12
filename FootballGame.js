"use strict";

const { deflateRaw } = require("zlib");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let players1 = game.players[0];
let players2 = game.players[1];

console.log(players1);

let [gk, ...fieldPlayers] = players1;

//console.log(gk);
//console.log(fieldPlayers);

let allPlayers = [...players1, ...players2];
//console.log(allPlayers);

let newAllPlayers = [...allPlayers, "Thiago", "Coutinho", "Perisic"];

//console.log(newAllPlayers);

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

const goals = function (...players) {
  //Arbitrary number of players can be passed
  console.log(players);
  console.log(players.length);
};

goals("Puerto", "Ichiban", "Mupasa");

team1 < team2 && console.log("Team 1 is likely to win");
team1 > team2 && console.log("Team 2 is likely to win");
