const jsonData = require("../../../matches.json");
const noOfMatchesWonPerYear = require("../noOfMatchesWonPerTeam");
const fs = require("fs");

const noOfMatchesWon = noOfMatchesWonPerYear(jsonData);
console.log(noOfMatchesWon);

//writing the json file
const path = "../../public/output/matchesWonByTeamPerYear.json";
const json = JSON.stringify(noOfMatchesWon);
fs.writeFileSync(path, json);
