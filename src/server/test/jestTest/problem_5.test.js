const jsonData = require("../../../../matches.json");
const matchAndTossWinner = require("../../matchAndTossWinner");

test("passing empty to check ", () => {
  const test = {};
  expect(matchAndTossWinner(test)).toEqual({});
});

test("find matches and toss winner ", () => {
  const test = [
    {
      season: "2016",
      toss_winner: "Sunrisers Hyderabad",
      winner: "Sunrisers Hyderabad",
    },
    {
      season: "2016",
      toss_winner: "Sunrisers Hyderabad",
      winner: "Sunrisers Hyderabad",
    },
    { season: "2018", toss_winner: "MI", winner: "RCB" },
  ];

  expect(matchAndTossWinner(test)).toEqual({
    "Sunrisers Hyderabad": 2,
  });
});
