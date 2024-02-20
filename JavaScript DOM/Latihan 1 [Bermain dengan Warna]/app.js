const changeColor = document.getElementById("changeColor");
changeColor.onclick = function () {
  // document.body.style.backgroundColor = "lightblue";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const randomColor = document.createElement("button");
const textButton = document.createTextNode("Random Color");
randomColor.appendChild(textButton);
randomColor.setAttribute("type", "button");
changeColor.after(randomColor);

randomColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
