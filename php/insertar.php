<?php

    require 'conectar.php';

    $name = $_POST['nombre'];
    $lastName = $_POST['apellidos'];
    $email = $_POST['correo'];
    $phone = $_POST['telefono'];
    $user = $_POST['usr'];
    $password = $_POST['pass'];

    $insertar = "INSERT INTO Usuarios VALUES
                (null, '$name', '$lastName', '$email', '$phone', '$user', '$password')";

    $query = mysqli_query($conexion, $insertar);

    if($query){
        echo 
        '
        
        <script>
            alert("Usuario Registrado");
            location.href = "../html/index.html";
        </script>

        ';
    } else {
        echo 
        '
        
        <script>
            alert("Fallo al INSERTAR al Usuario");
            location.href = "../html/index.html";
        </script>

        ';
    }

?>