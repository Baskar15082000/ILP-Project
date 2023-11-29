//9.Find the bowler with the best economy in super overs
function findRunsAndBallsInSuperOver(deliveries) {
  const info = [];
  deliveries.reduce((acc, delivery) => {
    if (delivery.is_super_over !== "0") {
      const bowler = delivery.bowler;
      if (delivery.wide_runs === "0" && delivery.noball_runs === "0") {
        if (!info[bowler]) {
          info[bowler] = {
            runs: 0,
            balls: 0,
          };
        }
        info[bowler].runs += parseInt(delivery.total_runs);
        info[bowler].balls++;
      } else {
        if (!info[bowler]) {
          info[bowler] = {
            runs: 0,
            balls: 0,
          };
        }
        info[bowler].runs += parseInt(delivery.total_runs);
      }
    }

    return acc;
  }, {});

  return info;
}

function toCalculateEconomy(runsAndBalls) {
  Object.keys(runsAndBalls).forEach((obj) => {
    let economy = parseFloat(
      (runsAndBalls[obj].runs / runsAndBalls[obj].balls) * 6
    );
    runsAndBalls[obj].economy = economy;
    delete runsAndBalls[obj].runs;
    delete runsAndBalls[obj].balls;
  });

  return runsAndBalls;
}

//sorting find top 10 blower
function findBowlerWithBestEconomy(economy) {
  let sortedEconomy = Object.keys(economy).sort(
    (a, b) => economy[a].economy - economy[b].economy
  );
  sortedEconomy = sortedEconomy.slice(0, 1).map((key) => ({
    player: key,
    economy: economy[key].economy,
  }));
  return sortedEconomy[0];
}

//find Economical bowler
function findBestEconomicalBlowers(deliveries) {
  const runsAndBalls = findRunsAndBallsInSuperOver(deliveries);
  const calculateEconomy = toCalculateEconomy(runsAndBalls);
  const bowlerWithBestEconomy = findBowlerWithBestEconomy(calculateEconomy);
  return bowlerWithBestEconomy;
}

module.exports = findBestEconomicalBlowers;
