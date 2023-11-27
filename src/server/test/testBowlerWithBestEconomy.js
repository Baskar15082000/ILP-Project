const deliveries = require("../../../deliveries.json");
const bowlerWithBestEconomy = require("../bowlerWithBestEconomy");
const fs = require("fs");

const bowlerWithBestEconomyOfAllSeason = bowlerWithBestEconomy(deliveries);
console.log(bowlerWithBestEconomyOfAllSeason);
//writing the json file
const path = "../../public/output/bowlerWithBestEconomyOfAllSeason.json";
const json = JSON.stringify(bowlerWithBestEconomyOfAllSeason);
fs.writeFileSync(path, json);
