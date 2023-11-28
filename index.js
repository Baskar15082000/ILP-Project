const matches = require("./matches.json");
const deliveries = require("./deliveries.json");

//problem 1
const problem_1 = require("./src/server/matchesPerYear");
console.log(problem_1(matches));

//problem 2
const problem_2 = require("./src/server/noOfMatchesWonPerTeam");
console.log(problem_2(matches));

//problem 3
const problem_3 = require("./src/server/extraRunsPerTeam");
console.log(problem_3(matches, deliveries));

//problem 4
const problem_4 = require("./src/server/top10EconomicalPlayers2015");
console.log(problem_4(matches, deliveries));

//problem 5
const problem_5 = require("./src/server/matchAndTossWinner");
console.log(problem_5(matches));

//problem 6
const problem_6 = require("./src/server/playerWonThePlayerOfMatchAwards");
console.log(problem_6(matches));

//problem 7
const problem_7 = require("./src/server/strikeRateOfBatsman");
console.log(problem_7(matches, deliveries));

//problem 8
const problem_8 = require("./src/server/highestNoOfTimePlayerDismissed");
console.log(problem_8(deliveries));

//problem_9
const problem_9 = require("./src/server/bowlerWithBestEconomy");
console.log(problem_9(deliveries));
