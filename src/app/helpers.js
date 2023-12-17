export function getRandId() {
  return Math.floor(Math.random() * (100000 - 1) + 1);
}

export function getDate() {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return `${day}.${month}.${year}`;
}
