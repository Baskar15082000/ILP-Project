const jsonData = require("../../../deliveries.json");

const highestNoOfTimePlayerDismissed = require("../highestNoOfTimePlayerDismissed");
const fs = require("fs");

const highestNoOfTimePlayerDismissedArray =
  highestNoOfTimePlayerDismissed(jsonData);
console.log(highestNoOfTimePlayerDismissedArray);
//writing the json file
const path = "../../public/output/highestNoOfTimePlayerDismissed.json";
const json = JSON.stringify(highestNoOfTimePlayerDismissedArray);
fs.writeFileSync(path, json);
