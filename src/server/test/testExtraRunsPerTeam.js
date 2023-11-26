const jsonData = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const extraRunsBYTeams = require("../extraRunsPerTeam");
const fs = require("fs");

const extraRuns = extraRunsBYTeams(jsonData, deliveries);
console.log(extraRuns);
//writing the json file
const path = "../../public/output/extraRunsPerTeam.json";
const json = JSON.stringify(extraRuns);
fs.writeFileSync(path, json);
