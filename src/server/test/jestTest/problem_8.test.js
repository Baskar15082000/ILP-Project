const jsonData = require("../../../../deliveries.json");
const playerDismissed = require("../../highestNoOfTimePlayerDismissed");

test("passing empty to check ", () => {
  const test = {};
  expect(playerDismissed(test)).toEqual({});
});

test("find highest no of time player dimissed  ", () => {
  const test = [
    {
      match_id: 1,
      bowler: "M Morkel",
      player_dismissed: "Yuvraj Singh",
    },
    {
      match_id: 4,
      bowler: "M Morkel",
      player_dismissed: "Yuvraj Singh",
    },
    {
      match_id: 4,
      bowler: "M Morkel",
      player_dismissed: "virak Kohli",
    },
    {
      match_id: 7,
      bowler: "UT Yadav",
      player_dismissed: "MS Dhoni",
    },
    {
      match_id: 9,
      bowler: "UT Yadav",
      player_dismissed: "",
    },
    {
      match_id: 11,
      bowler: "Ab d",
      player_dismissed: "virat kohli",
    },
  ];

  expect(playerDismissed(test)).toEqual({ "M Morkel": { "Yuvraj Singh": 2 } });
});
