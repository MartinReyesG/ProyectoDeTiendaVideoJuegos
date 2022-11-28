<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registros</title>

    <link rel="stylesheet" href="../css/style_admin.css">
</head>

<body>

    <header id="header-container">
        <a href="../html/inicioSesion.html">
            <h3 class="inicio" id="inicio">Iniciar Sesion</h3>
        </a>
        <input type="button" value="Cerrar Sesion" onclick="cerrar()" class="cerrarSesion" id="cerrarSesion" />
        <img src="../img/logo.png" alt="" />
        <h1>CHOMPI ENTERPRISE 2.0</h1>
        <nav>
            <a href="index.html" class="navegador">
                Tienda
                <i class="fa-solid fa-house-user"></i>
            </a>
            <a href="xbox.html" class="navegador">
                Juegos XBOX
                <i class="fa-brands fa-xbox"></i>
            </a>
            <a href="psn.html" class="navegador">
                Juegos PSN
                <i class="fa-brands fa-playstation"></i>
            </a>
            <a href="nintendo.html" class="navegador">
                Nintendo
                <i class="fa-solid fa-gamepad"></i>
            </a>
            <a href="#foo" class="navegador">
                Sobre nosotros
                <i class="fa-solid fa-person"></i>
            </a>
        </nav>
    </header>

    <main>
        <div>
            <section class="formulario">
                <form action="../php/crud.php" method="POST">
                    <input type="text" placeholder="Ingresar Usuario" name="valor" class="texto">
                    <input type="submit" value="AÑADIR" name="agregar" class="agregar boton">
                    <input type="submit" value="EDITAR" name="editar" class="editar boton">
                    <input type="submit" value="ELIMINAR" name="eliminar" class="eliminar boton">
                </form>
            </section>
            <section>
                <?php
            require 'conectar.php';
            $select = "SELECT Nombre, Usuario, Contraseña, Correo FROM Usuarios";
            $query = mysqli_query($conexion, $select);
            if (mysqli_num_rows($query) == 0) {
                die("Sin Registros");
            } else {
            ?>

                <table>
                    <tr>
                        <th class="encabezado" colspan="4">USUARIOS REGISTRADOS</th>
                    </tr>
                    <tr>
                        <th class="encabezado">Nombre</th>
                        <th class="encabezado">Usuario</th>
                        <th class="encabezado">Contraseña</th>
                        <th class="encabezado">Correo</th>
                    </tr>
                    <?php
                while ($row = mysqli_fetch_array($query)) {
                ?>
                    <tr>
                        <td class="dato">
                            <?php echo $row['Nombre'] ?>
                        </td>
                        <td class="dato">
                            <?php echo $row['Usuario'] ?>
                        </td>
                        <td class="dato">
                            <?php echo $row['Contraseña'] ?>
                        </td>
                        <td class="dato">
                            <?php echo $row['Correo'] ?>
                        </td>
                    </tr>
                    <?php
                }
                ?>
                </table>
                <?php
            }
            ?>
            </section>
        </div>
    </main>

</body>

</html>