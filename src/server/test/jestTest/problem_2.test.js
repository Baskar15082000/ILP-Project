const jsonData = require("../../../../matches.json");
const noOfMatchesWonPerTeam = require("../../noOfMatchesWonPerTeam");

test("passing empty to check ", () => {
  const test = {};
  expect(noOfMatchesWonPerTeam(test)).toEqual({});
});

test("find no of match won for given test case ", () => {
  const test = [
    { season: "2016", id: "1", winner: "Sunrisers Hyderabad" },
    { season: "2016", id: "2", winner: "Sunrisers Hyderabad" },
    { season: "2018", id: "4", winner: "RCB" },
    { season: "2018", id: "10", winner: "" },
  ];

  expect(noOfMatchesWonPerTeam(test)).toEqual({
    2016: { "Sunrisers Hyderabad": 2 },
    2018: { RCB: 1 },
  });
});
