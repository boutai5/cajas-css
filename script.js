
//alert() muestra una ventana emergente
/*
alert("hola mundo");
alert(1+9+41);
alert("1+52+23");
*/




let saludo= "holaaa";


let despedida = "adios";
saludo ="hola!";

//igualar una variable al otra
 let nombreusuario = "boutaina";

 alert( saludo+nombreusuario);

//constantes
const SALUDO_USUARIO = saludo + "boutaina";     //hola boutaina

 saludo
saludo = despedida;
/*
 alert(1+2);   //sumar
 alert(1-2);   //restar
 alert(12/2);  //dividir
 alert(8*2);   //multiplicar
 alert(8%2);   //resto de division
 alert(15%2);
 */

let decada = 10;

 let edad = 16;
 edad = 17;
 edad = edad + 1;   //puedo sumar a la variable porque guarda el valor numerico
 edad ++;  //suma uno
 edad --;  //resta uno
 edad += decada;



 alert(edad);

 //muestra lo que pongamos entre los parentesis en la consola
 console.log("hola");

alert( saludo+" " +nombreusuario); //puedo concatenar el string usando+
//no puede cambiar el valor
const saludo_usuario = "hola de nuevo"
console.log( 5 > 4);
console.log( 5 < 8 );

console.log( 5 >= 6 );  // mayor que o igual que
console.log( 5 <= 7 );
console.log( 5== "5")
console.log( 5 == 5 );
console.log( 5 !=7); //no es igual

console.log("a">"b");
let boleeano = (4 < 2);
console.log(boleeano);

if (edad>=18) {
    alert("eres mayor de edad");
    

}

let premium = true;

if(premium) {
    console.log("tienes cuenta premium")
    alert("bienvenido"+nombreusuario)

}else if(edad>18){
    Consol.log("puedes crear una cuenta");

}else{
    console.log("no puedes crear una cuenta");
}


//INTERACTUAR CON HTM.DOM
//       recojo el elemento  //   que hago //
document.getElementById("texto").innerHTML = "holaaaaa";
document.getElementById("caja").innerHTML = "<p> hola de nuevo </p>";
// selecciono primer elemento
document.querySelector("#texto").innerHTML  =  "metiendo codigo";

// seleccionar todos los elementos
//document.queryselectorall


document.getElementsByClassName("articulo");

let texto = document.getElementById("texto");
texto.innerHTML =  " he guardado mi selector en una variable";
document.body.style.color = "black";

//funciones
function saludar() {
    alert("bienvenido");

}

saludar();

modo nochee()

