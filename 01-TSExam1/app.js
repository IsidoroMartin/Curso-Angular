"use strict";
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) { return (a + b) * 2; };
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    console.log(mensaje);
}
;
var getAvenger2 = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje = nombre + " " + ((poder) ? 'tiene el poder de ' + poder : 'no tiene poder') + " y un arma " + arma;
    console.log(mensaje);
};
getAvenger2("Pepe", null, "espada");
getAvenger("Juan", "curar", "espada");
// Cree una clase que permita manejar la siguiente estructura 
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
    //getArea = () => this.base*this.altura;
    Rectangulo.prototype.getArea = function () {
        return this.base * this.altura;
    };
    ;
    return Rectangulo;
}());
console.log(new Rectangulo(2, 2).getArea());
