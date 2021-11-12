function uaRandom(numberOfResidents) {
  const randomNumber = Math.floor(Math.random() * numberOfResidents);
  return `If your seniority number is ${randomNumber + 1} you must test today`;
}
console.log(uaRandom(3));
