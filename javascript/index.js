var imgMatriz = [3];
imgMatriz[0] = [
  "../img/xbox/1.jpg",
  "SEA OF THIEVES",
  "$2,500",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas sit quis, animi ut voluptatibus?",
  "../img-sot/1.jpg",
  "../img-sot/2.jpg",
  "../img-sot/3.jpg",
  "../img-sot/4.jpg",
];
imgMatriz[1] = [
  "../img/xbox/2.jpg",
  "QUANTUM BREAK",
  "$2,100",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem minima id cupiditate, velit culpa alias maxime fugit laudantium porro.",
  "../img-qb/1.jpg",
  "../img-qb/2.jpg",
  "../img-qb/3.jpg",
  "../img-qb/4.jpg",
];
imgMatriz[2] = [
  "../img/xbox/3.jpg",
  "STATE OF DECAY 2",
  "$1,350",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt reprehenderit inventore, mollitia soluta nihil libero rem obcaecati eaque deserunt corporis. Sed dicta voluptatibus perferendis expedita.",
  "../img-sod/1.jpg",
  "../img-sod/2.jpg",
  "../img-sod/3.jpg",
  "../img-sod/4.jpg",
];

bandera = false;

function llamarModal(id) {
  localStorage.setItem("identificador", id);
  var modal = document.getElementById("modal-container");
  modal.style.display = "flex";
  modal.style.animationName = "aparecer";
  modal.style.animationDuration = "300ms";
  modal.style.animationIterationCount = "1";
  modal.style.animationTimingFunction = "lineal";
  bandera = true;
  cargarImg();
}

async function cargarImg() {
  var imgModal = document.getElementById("imagenGamePlayModal");
  document.getElementById("imgPrincipal").src =
    imgMatriz[localStorage.getItem("identificador")][0];
  document.getElementById("titulo").innerHTML =
    imgMatriz[localStorage.getItem("identificador")][1];
  document.getElementById("precioModal").innerHTML =
    imgMatriz[localStorage.getItem("identificador")][2];
  document.getElementById("informacionModal").innerHTML =
    imgMatriz[localStorage.getItem("identificador")][3];
  for (
    let index = 4;
    index < imgMatriz[localStorage.getItem("identificador")].length;
    index++
  ) {
    if (bandera == true) {
      imgModal.src = imgMatriz[localStorage.getItem("identificador")][index];
      await delay(2000);
      if (index == 7) {
        index = 3;
      }
    }
  }
}

async function cerrarModal() {
  bandera = false;
  await delay(0);
  var modal = document.getElementById("modal-container");
  modal.style.animationName = "desaparecer";
  modal.style.animationDuration = "800ms";
  modal.style.animationIterationCount = "1";
  modal.style.animationTimingFunction = "lineal";
  localStorage.removeItem("identificador");
  setTimeout(() => {
    modal.style.display = "none";
  }, 800);
}

function delay(tiempo) {
  return new Promise((resolve) => setTimeout(resolve, tiempo));
}

function paginaPago() {
  window.location.href = "pago.html";
}
