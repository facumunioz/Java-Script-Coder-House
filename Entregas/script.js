let pass= 1234;
let dato = parseInt(prompt("Cual es la contraseña?"));
let intentos = 3;

while ((dato !=pass) && (intentos < 3)); {
    intentos--;
    alert (`la contrasenia es erroenea. Te quedan ${intentos}`);
    dato = parseInt (prompt ("Cual es la contraseña?"));
}





