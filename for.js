var estadoCivil=0, edad=0, estatura=0, genero=0, contadorPersonas=0, acumuladorEdad=0, acumuladorEstatura=0, promedioEdad=0, promedioEstatura=0, porcentajeCondicion=0, totalPersonas=0;
totalPersonas=parseInt(prompt("Ingrese el total de personas"))
for (let numeroPersonas = 1; numeroPersonas <= totalPersonas; numeroPersonas++) {
    edad=parseInt(prompt("Ingrese la edad de la persona " +numeroPersonas));
    estatura=parseInt(prompt("Ingrese la estatura de la persona " +numeroPersonas + " en centimetros"));
    genero=parseInt(prompt("Ingrese el genero de la persona " +numeroPersonas + " 1.Masculino 2.Femenino"));
    estadoCivil=parseInt(prompt("Ingrese el estado civil de la persona " +numeroPersonas + " 1.Soltera 2.Casada"));
    if ((edad>=18) && (estatura>170) && (genero==1) && (estadoCivil==1) ) {
        contadorPersonas = contadorPersonas+1;
        acumuladorEdad = acumuladorEdad + edad;
        acumuladorEstatura = acumuladorEstatura + estatura;
    }
    
}
promedioEdad = acumuladorEdad/contadorPersonas;
promedioEstatura = acumuladorEstatura/contadorPersonas;
porcentajeCondicion = (contadorPersonas/totalPersonas)*100;

alert("El promedio de Edad de las personas que cumplen la condición es " +promedioEdad);
alert("El promedio de estatura de las personas que cumplen la condición es " +promedioEstatura);
alert("El porcentaje de las personas que cumplen la condición es " +porcentajeCondicion);