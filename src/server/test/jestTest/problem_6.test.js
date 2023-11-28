const jsonData = require("../../../../matches.json");
const playerWonThePlayerOfMatchAward = require("../../playerWonThePlayerOfMatchAwards");

test("passing empty to check ", () => {
  const test = {};
  expect(playerWonThePlayerOfMatchAward(test)).toEqual({});
});

test("find player won the player of match ", () => {
  const test = [
    { season: "2016", id: "1", player_of_match: "Yuvraj Singh" },
    { season: "2016", id: "2", player_of_match: "Yuvraj Singh" },
    { season: "2016", id: "4", player_of_match: "Yuvraj Singh" },
    { season: "2016", id: "4", player_of_match: "Virat Kohli" },
    { season: "2016", id: "4", player_of_match: "Virat Kohli" },

    { season: "2017", id: "6", player_of_match: "KM Jadhav" },
    { season: "2018", id: "8", player_of_match: "MS Dhoni" },
    { season: "2018", id: "9", player_of_match: "MS Dhoni" },
    { season: "2020", id: "10", player_of_match: "MS Dhoni" },
  ];

  expect(playerWonThePlayerOfMatchAward(test)).toEqual({
    2016: { "Yuvraj Singh": 3 },
    2017: { "KM Jadhav": 1 },
    2018: { "MS Dhoni": 2 },
    2020: { "MS Dhoni": 1 },
  });
});
