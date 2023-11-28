function countMatchAndTossWinner(matches) {
  if (
    matches === null ||
    matches === undefined ||
    Object.keys(matches).length === 0
  ) {
    return {};
  }
  const matchAndToss = matches.reduce((acc, curr) => {
    if (acc[curr.winner] && curr.winner === curr.toss_winner) {
      acc[curr.winner]++;
    } else if (curr.winner === curr.toss_winner) {
      acc[curr.winner] = 1;
    }
    return acc;
  }, {});
  return matchAndToss;
}

module.exports = countMatchAndTossWinner;
