function countMatchAndTossWinner(matches) {
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
