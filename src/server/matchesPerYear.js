//1.Number of matches played per year for all the years in IPL.

function findMatchesPerYears(matches) {
  const ans = matches.reduce((acc, curr) => {
    //curr.season present the incrementing
    if (acc[curr.season]) {
      acc[curr.season]++;
    }
    //if not curr.season present initializing 1 to it
    else {
      acc[curr.season] = 1;
    }
    return acc;
  }, {});
  return ans;
}
//exporting findMatchesPerYears
module.exports = findMatchesPerYears;
