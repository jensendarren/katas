const HOME_TEAM_WON = 1;

// O(n) time | O(k) spec - where n i shte number
// of competitions and k is the number of teams
function tournamentWinner(competition, results) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0}

  for(let idx=0; idx<competition.length; idx++) {
    const result = results[idx] // e.g. 1
    const [homeTeam, awayTeam] = competition[idx] // e.g ["HTML", "C#"]

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    updateScores(winningTeam, 3, scores)

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam
    }
  }

  return currentBestTeam
}

function updateScores(team, points, scores) {
  if(!(team in scores)) scores[team] = 0

  scores[team] += points;
}

module.exports = tournamentWinner;