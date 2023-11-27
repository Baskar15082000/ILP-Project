const jsonData = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const strikeRateOfBatsman = require("../strikeRateOfBatsman");
const fs = require("fs");

const strikeRate = strikeRateOfBatsman(jsonData, deliveries);
console.log(strikeRate);

//writing the json file
const path = "../../public/output/strikeRateOfBatsman.json";
const json = JSON.stringify(strikeRate);
fs.writeFileSync(path, json);
