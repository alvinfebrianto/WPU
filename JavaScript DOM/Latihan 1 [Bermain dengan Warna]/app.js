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

const redSlider = document.querySelector("input[name=redSlider]");
const greenSlider = document.querySelector("input[name=greenSlider]");
const blueSlider = document.querySelector("input[name=blueSlider]");
redSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
greenSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
blueSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
