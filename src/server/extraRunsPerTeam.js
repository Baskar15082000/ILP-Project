//3.Extra runs conceded per team in the year 2016
function extraRunsBYTeams(matches, deliveries) {
  const idOf2016 = [];
  const matchedPlayed = matches.filter((match) => {
    if (match.season === "2016") {
      idOf2016.push(match.id);
    }
  });
  const extraRunsByTeams = {};

  deliveries.map((element) => {
    if (
      extraRunsByTeams[element.batting_team] &&
      parseInt(element.extra_runs) > 0 &&
      idOf2016.includes(element.match_id)
    ) {
      extraRunsByTeams[element.batting_team] += parseInt(element.extra_runs);
    } else if (
      parseInt(element.extra_runs) > 0 &&
      idOf2016.includes(element.match_id)
    ) {
      extraRunsByTeams[element.batting_team] = parseInt(element.extra_runs);
    }
  });

  return extraRunsByTeams;
}
module.exports = extraRunsBYTeams;
