<?php
require 'conectar.php';
$dato = $_POST['valor'];

if (isset($_POST['editar'])) {
    $sql = "UPDATE Usuarios SET Correo = 'Correo_Modificado@gmail.com' WHERE Usuario = '" . $dato . "'";
    $result = mysqli_query($conexion, $sql);
    if (!$result) {
        echo "La consulta SQL contiene errores";
        exit();
    } else {
        echo
            '
            <script> alert ("Se actualiza el registro");
            location.href = "admin.php"
            </script>
            ';
    }
} else if (isset($_POST['eliminar'])) {
    $sql = "DELETE FROM Usuarios WHERE Usuario = '" . $dato . "'";
    $result = mysqli_query($conexion, $sql);
    if (!$result) {
        echo "La cosulta SQL contiene errores." . mysqli_error($conexion);
        exit();
    } else {
        echo
            '
            <script> alert("Se borro el registro");
            location.href = "admin.php"
            </script>
            ';
    }
} else if (isset($_POST['agregar'])) {
    echo
        '
        <script>
        location.href = "../html/registro.html"
        </script>
        ';
} else {
    mysqli_close($conexion);
}
?>