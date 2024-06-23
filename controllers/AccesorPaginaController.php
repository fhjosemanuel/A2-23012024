<?php
$plataformas = [
    0 => 'Programa Educativo - Administrativos',
    1 => 'Programa Educativo de Biología',
    2 => 'Programa Educativo de Biotecnología',
    3 => 'Programa Educativo de Químico Biólogo Parasitólogo'
];

$clave_secreta = 'Plataforma-SIGAA-I Mexicana';

// Verificar si se recibió una plataforma válida desde el formulario POST
if (isset($_POST['plataforma']) && array_key_exists($_POST['plataforma'] - 1, $plataformas)) {
    $plataforma = $plataformas[$_POST['plataforma'] - 1];
    $token = generarToken($plataforma, $_POST['plataforma'], $clave_secreta);

    // Redirigir a la página principal o a donde sea necesario
    header("Location: http://sigaa-i.test?token=". $token);
    exit;
} else {
    echo "Error: Plataforma no válida o no seleccionada.";
}

function generarToken($plataforma, $clave, $clave_secreta) {
    $cadena = $plataforma . $clave . $clave_secreta;
    $token = hash('sha256', $cadena);
    return $token;
}
?>
