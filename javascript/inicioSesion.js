let userLocalStorage;
let bandera;

function login() {
  if (localStorage.getItem("bandera") == null) {
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    userLocalStorage = usuario;
    verificarUser(usuario, pass);
  } else {
    document.getElementById("inicio").innerHTML = "Ya hay una sesion iniciada";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
}

function cerrar() {
  localStorage.removeItem("bandera");
  localStorage.removeItem("usuarioLog");
  document.getElementById("inicio").innerHTML = "Iniciar Sesion";
  document.getElementById("cerrarSesion").style.display = "none";
}

window.addEventListener("load", () => {
  if (localStorage.getItem("bandera")) {
    document.getElementById("inicio").innerHTML =
      "Bienvenido " + localStorage.getItem("usuarioLog");
    document.getElementById("cerrarSesion").style.display = "block";  
  } else if (!localStorage.getItem("bandera")) {
    /* document.getElementById("titulo").innerHTML = "Iniciar Sesion"; */
  }
});

function verificarUser(nombre, pass) {
  if (localStorage.getItem("arreglo") != null) {
    var datos = JSON.parse(localStorage.getItem("arreglo"));
    for (let index = 0; index < datos.length; index++) {
      if (datos[index].user == nombre) {
        if (datos[index].contraseña == pass) {
          document.getElementById("inicio").innerHTML = nombre;
          userLocalStorage = nombre;
          localStorage.setItem("usuarioLog", userLocalStorage);
          bandera = true;
          localStorage.setItem("bandera", bandera);
          document.getElementById("inicio").innerHTML = "Acceso concedido";
          document.getElementById("user").value = "";
          document.getElementById("pass").value = "";
          setTimeout(() => {
            window.location.href = "index.html";
          }, 4000);
        } else {
          document.getElementById("inicio").innerHTML =
            "La contraseña es incorrecta";
        }
        break;
      } else {
        document.getElementById("inicio").innerHTML = "El usuario no existe";
      }
    }
  } else {
    document.getElementById("inicio").innerHTML = "No hay datos";
  }
}

function registro() {
  var erNombre = new RegExp("^[A-Z][a-z]+( )?[A-Z]*[a-z]*$");
  var erApellido = new RegExp("^[A-Z][a-z]+( )?[A-Z][a-z]*$");
  var erEmail = new RegExp("^[SGEsge][0-9]{8}[@](alumnos.itsur.edu.mx)$");
  var erTel = new RegExp("^[+](52)[-][0-9]{3}[-][0-9]{3}[-][0-9]{4}$");
  var erPass = new RegExp("^[^ ]{8,16}$");

  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellidos").value;
  email = document.getElementById("correo").value;
  telefono = document.getElementById("telefono").value;
  pass = document.getElementById("pass").value;
  usr = document.getElementById("usr").value;

  validacion = "";

  if (!erNombre.test(nombre)) {
    document.getElementById("nombre").style.background = "rgba(255, 0, 0, 0.6)";
    validacion += "[ No cumple con el NOMBRE ] ";
    document.getElementById("nombre").value = "";
  }

  if (!erApellido.test(apellido)) {
    document.getElementById("apellidos").style.background = "rgba(255, 0, 0, 0.6)";
    validacion += "[ No cumple con el APELLIDO ] ";
    document.getElementById("apellidos").value = "";
  }

  if (!erEmail.test(email)) {
    document.getElementById("correo").style.background = "rgba(255, 0, 0, 0.6)";
    validacion += "[ No cumple con el CORREO ] ";
    document.getElementById("correo").value = "";
  }

  if (!erTel.test(telefono)) {
    document.getElementById("telefono").style.background = "rgba(255, 0, 0, 0.6)";
    validacion += "[ No cumple con el TELEFONO ] ";
    document.getElementById("telefono").value = "";
  }

  if (!erPass.test(pass)) {
    document.getElementById("pass").style.background = "rgba(255, 0, 0, 0.6)";
    validacion += "[ No cumple con la CONTRASEÑA ] ";
    document.getElementById("pass").value = "";
  }

  setTimeout(() => {
    document.getElementById("nombre").style.background = "none";
    document.getElementById("apellidos").style.background = "none";
    document.getElementById("correo").style.background = "none";
    document.getElementById("telefono").style.background = "none";
    document.getElementById("pass").style.background = "none";
  }, 3000);

  if (validacion === "") {
    objUsuario = {
      name: nombre,
      correo: email,
      user: usr,
      contraseña: pass,
      edad: 20,
    };

    insertar(objUsuario);

    setTimeout(() => {
      window.location.href = "inicioSesion.html";
    }, 2000);
  }
}

function insertar(obj) {
  if (localStorage.getItem("arreglo") == null) {
    localStorage.setItem("arreglo", "[]");
  }
  var datos = JSON.parse(localStorage.getItem("arreglo"));
  datos.push(obj);
  localStorage.setItem("arreglo", JSON.stringify(datos));
}
