
const badgesColors = [
  "badge-info",
  "badge-success",
  "badge-warning",
  "badge-error",
  "badge-primary",
  "badge-secondary",
  "badge-accent"
];

function getRandomBadgeColor() {
  const randomIndex = Math.floor(Math.random() * badgesColors.length);
  return badgesColors[randomIndex];
}

export default getRandomBadgeColor;