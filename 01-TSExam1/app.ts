
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE: { nombre : string , edad : number } = {
  nombre: nombre,
  edad: edad
};
console.log(PERSONAJE)

// Cree una interfaz que sirva para validar el siguiente objeto
interface SuperHero {
    nombre:string,
    artesMarciales:string[]
}
let batman:SuperHero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
let resultadoDoble  = ( a:number, b:number ) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:any, arma:string ="arco"){
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + arma;
  }
  console.log(mensaje);
};
let getAvenger2 = ( nombre:string, poder?:any, arma:string ="arco") =>{
    let mensaje = `${ nombre } ${ (poder)?'tiene el poder de '+poder:'no tiene poder' } y un arma ${ arma }`;
    console.log(mensaje);
};
getAvenger2("Pepe",null,"espada");
getAvenger("Juan","curar","espada");

// Cree una clase que permita manejar la siguiente estructura 
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
    constructor(public base:number,public altura:number){
        this.base = base;
        this.altura = altura;
    }
    //getArea = () => this.base*this.altura;
    getArea():number{
        return this.base*this.altura
    };
}
console.log(new Rectangulo(2,2).getArea());



