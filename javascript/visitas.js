var cont;

window.addEventListener("load", () => {
  visitas(cont);
  localStorage.setItem(
    "contador",
    JSON.parse(localStorage.getItem("contador")) + 1
  );
  document.getElementById("contador").innerHTML =
    localStorage.getItem("contador");
});

function visitas(cont) {
  if (localStorage.getItem("contador") == null) {
    cont = 0;
    localStorage.setItem("contador", cont);
  }
}
