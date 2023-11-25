const csvtojson = require("csvtojson");
const fs = require("fs");

const csvFilePath = "src/data/deliveries.csv"; // Replace with the actual path to your CSV file
const jsonFilePath = "deliveries.json"; // Replace with the desired path to save the JSON file

csvtojson()
  .fromFile(csvFilePath)
  .then((jsonArrayObj) => {
    const jsonString = JSON.stringify(jsonArrayObj, null, 2);

    fs.writeFile(jsonFilePath, jsonString, "utf8", (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("Conversion complete! JSON file saved at:", jsonFilePath);
      }
    });
  })
  .catch((error) => console.error("Error converting CSV to JSON:", error));
