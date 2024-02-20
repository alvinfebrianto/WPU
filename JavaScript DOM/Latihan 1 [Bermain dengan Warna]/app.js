const changeColor = document.getElementById("changeColor");
change.onclick = function () {
  // document.body.style.backgroundColor = "lightblue";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};
