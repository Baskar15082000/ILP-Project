//7.Find the strike rate of a batsman for each season

function findRunsAndBalls(deliveries) {
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
