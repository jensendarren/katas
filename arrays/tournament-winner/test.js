const tournamentWinner = require('./solution')

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]

results = [0,0,1]

const winner = tournamentWinner(competitions, results)

console.log(`Winning Team: ${winner}`)