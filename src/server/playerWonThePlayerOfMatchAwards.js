//6.Find a player who has won the highest number of Player of the Match awards for each season
function findAllThePlayerOfMatchAward(matches) {
  const playerOfMatch = matches.reduce((accu, curr) => {
    if (!accu[curr.season]) {
      accu[curr.season] = {};
    }
    if (accu[curr.season][curr.player_of_match]) {
      accu[curr.season][curr.player_of_match]++;
    } else {
      accu[curr.season][curr.player_of_match] = 1;
    }
    return accu;
  }, []);
  return playerOfMatch;
}
function highestPlayerWonThePlayerOfMatch(matches) {
  const playerOfMatch = findAllThePlayerOfMatchAward(matches);
  let playerOfMatchAward = {};
  for (let season in playerOfMatch) {
    // Convert the object to an array of key-value pairs
    const keyValueArray = Object.entries(playerOfMatch[season]);

    // Sort the array based on values
    keyValueArray.sort((a, b) => b[1] - a[1]);
    playerOfMatchAward[season] = {};
    playerOfMatchAward[season][keyValueArray[0][0]] = keyValueArray[0][1];
  }

  return playerOfMatchAward;
}
module.exports = highestPlayerWonThePlayerOfMatch;
