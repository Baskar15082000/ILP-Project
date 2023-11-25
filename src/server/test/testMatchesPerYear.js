//inporting
const jsonData = require("../../../matches.json");
const findMatchesPerYears = require("../matchesPerYear");
const fs = require("fs");

const noOfMatchesPerYears = findMatchesPerYears(jsonData);
console.log(noOfMatchesPerYears);

//writing the json file
const path = "../../public/output/matchesPerYear.json";
const json = JSON.stringify(noOfMatchesPerYears);
fs.writeFileSync(path, json);
