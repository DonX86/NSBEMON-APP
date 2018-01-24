export const calculatePoints = (pointsList) => {
  return pointsList.reduce((accum, curr) => accum + curr.points, 0);
}
