<?php

    $direccion = "localhost";
    $usuario = "root";
    $bd = "Juegos";

    $conexion = new mysqli($direccion, $usuario, "", $bd);

    if($conexion -> connect_errno){
        die("Fallo la conexion".mysqli_connect_errno());
    }

?>