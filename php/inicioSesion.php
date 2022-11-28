<?php

    require 'conectar.php';

    $usuario = $_POST['user'];
    $contraseña = $_POST['pass'];

    $select = "SELECT * FROM Usuarios 
                WHERE Usuario = '$usuario'
                AND Contraseña = '$contraseña'";

    $query = mysqli_query($conexion, $select);

    if($query){
        if(mysqli_num_rows($query) != 0){
            echo
            '
                <script>
                    alert("Bienvenido '.$usuario.'");
                    location.href = "../html/index.html";
                </script>
            ';
        } else {
            echo
            '
                <script>
                    location.href = "../html/inicioSesion.html";
                </script>
            ';
        }
    }

?>