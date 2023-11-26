const jsonData = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const findTop10EconomicalBlowers = require("../top10EconomicalPlayers2015");
const fs = require("fs");

const top10Players = findTop10EconomicalBlowers(jsonData, deliveries);
console.log(top10Players);
//writing the json file
const path = "../../public/output/top10EconomicalBlowers.json";
const json = JSON.stringify(top10Players);
fs.writeFileSync(path, json);
