function playerDismissed(deliveries) {
  const ans = deliveries.reduce((acc, curr) => {
    if (curr.player_dismissed !== "") {
      if (!acc[curr.bowler]) {
        acc[curr.bowler] = {};
      }
      if (acc[curr.bowler][curr.player_dismissed] === undefined) {
        acc[curr.bowler][curr.player_dismissed] = 1;
      } else {
        acc[curr.bowler][curr.player_dismissed]++;
      }
    }
    return acc;
  }, {});
  return ans;
}

function highestNoOfTimePlayerDismissed(deliveries) {
  if (
    deliveries === null ||
    deliveries === undefined ||
    Object.keys(deliveries).length === 0
  ) {
    return {};
  }

  const playerOfMatch = playerDismissed(deliveries);
  let sortedDismissed = {};
  let temp = -1;
  for (let bowler in playerOfMatch) {
    const keyValueArray = Object.entries(playerOfMatch[bowler]);

    // Sort the array based on values
    keyValueArray.sort((a, b) => b[1] - a[1]);
    if (keyValueArray[0][1] > temp) {
      sortedDismissed = {};
      sortedDismissed[bowler] = {};
      sortedDismissed[bowler][keyValueArray[0][0]] = keyValueArray[0][1];
      temp = keyValueArray[0][1];
    }
  }

  return sortedDismissed;
}

module.exports = highestNoOfTimePlayerDismissed;
