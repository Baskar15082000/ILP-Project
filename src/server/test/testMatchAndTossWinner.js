const jsonData = require("../../../matches.json");

const countMatchAndTossWinner = require("../matchAndTossWinner");
const fs = require("fs");

const matchAndToss = countMatchAndTossWinner(jsonData);
console.log(matchAndToss);
//writing the json file
const path = "../../public/output/matchAndTossWinner.json";
const json = JSON.stringify(matchAndToss);
fs.writeFileSync(path, json);
