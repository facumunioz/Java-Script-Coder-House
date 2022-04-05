function notaUsuario () {
    let nota = parseInt(prompt("Cuales es la nota?"));
    if (nota > 6) {
        console.log ("aprobado");
    } else {
        console.log ("desaprobado")
    }
}

notaUsuario ();