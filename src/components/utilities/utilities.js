export const takeN = (someList, n) => {
  return someList.slice(0, n);
}

export const dropN = (someList, n) => {
  return someList.slice(n, someList.length);
}
