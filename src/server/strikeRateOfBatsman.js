//7.Find the strike rate of a batsman for each season
function findYearsAndId(matches) {
  const idMap = {};
  const id = matches.map((match, ind) => {
    idMap[match.id] = match.season;
  });
  return idMap;
}

function findRunsAndBallsForSeason(deliveries, yearsAndId) {
  const info = deliveries.reduce((acc, delivery) => {
    let season = yearsAndId[delivery.match_id];
    const batsman = delivery.batsman;
    const totalRuns =
      parseInt(delivery.total_runs) - parseInt(delivery.extra_runs);
    let balls = 0;
    if (delivery.wide_runs === "0" && delivery.noball_runs === "0") {
      balls = 1;
    }

    if (acc[season] == undefined) {
      acc[season] = {};
    }

    if (acc[season][batsman] === undefined) {
      acc[season][batsman] = {
        runs: 0,
        balls: 0,
      };
    }
    acc[season][batsman].runs += totalRuns;
    acc[season][batsman].balls += balls;

    return acc;
  }, {});

  return info;
}
function calculateStrikeRate(runsAndBalls) {
  for (let season in runsAndBalls) {
    for (let batsman in runsAndBalls[season]) {
      const runs = runsAndBalls[season][batsman].runs;
      const balls = runsAndBalls[season][batsman].balls;
      runsAndBalls[season][batsman] = parseFloat(
        ((runs / balls) * 100).toFixed(2)
      );
    }
  }
  return runsAndBalls;
}

function strikeRateOfBatsman(matches, deliveries) {
  const yearsAndId = findYearsAndId(matches);
  const runsAndBalls = findRunsAndBallsForSeason(deliveries, yearsAndId);
  const strikeRate = calculateStrikeRate(runsAndBalls);
  return strikeRate;
}

module.exports = strikeRateOfBatsman;
