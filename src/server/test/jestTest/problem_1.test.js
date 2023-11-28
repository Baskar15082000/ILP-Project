const jsonData = require("../../../../matches.json");
const findMatchesPerYears = require("../../matchesPerYear");

test("passing empty to check ", () => {
  const test = {};
  expect(findMatchesPerYears(test)).toEqual({});
});

test("count match per year for give test case ", () => {
  const test = [
    { season: "2017", id: "1" },
    { season: "2017", id: "2" },
    { season: "2018", id: "4" },
  ];

  expect(findMatchesPerYears(test)).toEqual({ 2017: 2, 2018: 1 });
});

// test("passing null to check", () => {
//   const test = undefined;

//   expect(findMatchesPerYears(test)).toEqual({});
// });
