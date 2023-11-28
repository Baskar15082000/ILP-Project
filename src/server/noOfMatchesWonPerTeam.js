//2.Number of matches won per team per year in IPL.

function findNoMatchesWonByTeam(matches) {
  if (
    matches === null ||
    matches === undefined ||
    Object.keys(matches).length === 0
  ) {
    return {};
  }
  const ans = {};
  matches.forEach((match) => {
    let year = match.season;
    let winner = match.winner;
    if (winner && year) {
      if (!ans[year]) {
        ans[year] = {};
      }
      if (!ans[year][winner]) {
        ans[year][winner] = 1;
      } else {
        ans[year][winner]++;
      }
    }
  });
  return ans;
}

module.exports = findNoMatchesWonByTeam;
