const btn = document.getElementById("flip-btn");
const colorText = document.getElementById("color");

btn.addEventListener("click", () => {
  // Generate random hex color
  const randomColor = getRandomColor();

  // Apply background color
  document.body.style.backgroundColor = randomColor;

  // Update text
  colorText.textContent = randomColor;
  colorText.style.color = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
