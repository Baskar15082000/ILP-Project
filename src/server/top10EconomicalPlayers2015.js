//4.Top 10 economical bowlers in the year 2015

//find id s of 2015 played match
function find2015Matches(matches) {
  const idOf2015 = [];
  matches.forEach((match) => {
    if (match.season === "2015") {
      idOf2015.push(match.id);
    }
  });
  return idOf2015;
}

//calculate runs and balls
function findRunsAndBalls(idOf2015, deliveries) {
  const info = [];
  deliveries.reduce((acc, delivery) => {
    if (idOf2015.includes(delivery.match_id)) {
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

//calculate the economy
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
function findTop10Economy(economy) {
  const sortedEconomy = Object.keys(economy).sort(
    (a, b) => economy[a].economy - economy[b].economy
  );
  const top10Players = sortedEconomy.slice(0, 10).map((key) => ({
    player: key,
    economy: economy[key].economy,
  }));
  return top10Players;
}

//finding top 10 economical blowers of 2015
function findTop10EconomicalBlowers(matches, deliveries) {
  const idof2015 = find2015Matches(matches);
  const runsAndBalls = findRunsAndBalls(idof2015, deliveries);
  const calculateEconomy = toCalculateEconomy(runsAndBalls);
  const top10Economy = findTop10Economy(calculateEconomy);
  return top10Economy;
}

module.exports = findTop10EconomicalBlowers;
