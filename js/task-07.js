const textElement = document.getElementById("text");

const inputElement = document.getElementById("font-size-control");

inputElement.addEventListener("input", (a) => {

  const size = inputElement.value;

  textElement.style.fontSize = size + "px";
});