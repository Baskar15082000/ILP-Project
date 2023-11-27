const jsonData = require("../../../matches.json");

const highestPlayerWonThePlayerOfMatch = require("../playerWonThePlayerOfMatchAwards");
const fs = require("fs");

const playerWonThePlayerOfMatchAward =
  highestPlayerWonThePlayerOfMatch(jsonData);
console.log(playerWonThePlayerOfMatchAward);
//writing the json file
const path = "../../public/output/playerWonThePlayerOfMatchAward.json";
const json = JSON.stringify(playerWonThePlayerOfMatchAward);
fs.writeFileSync(path, json);
