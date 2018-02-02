export const calculatePoints = (pointsList) => {
  return pointsList.reduce((accum, curr) => (
    accum + curr.points
  ), 0);
}

export const calculateTeamPoints = (members) => {
  return members.reduce((accum, curr) => (
    accum + calculatePoints(curr.profile.categories)
  ), 0);
}
