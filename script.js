
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
if (premium||femenino);  //elegir entre la pr
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
//selectores
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
texto.style.color = " blue";
document.body.style.color = "black";


//funciones
// function ingresar



function saludar() {
    alert("bienvenido");

}



function modoNoche(){
document.body.style.backgroundColor = "black";
document.body.style.color= "white";

}

function modoDia(){
    document.body.style.backgroundColor = "white";
    document.body.style.color= "black";

}

function saludarUsuario(){
     let inputUsuario = document.querySelector("#nombre-usuario");
     alert(" hola de nuevo"+inputUsuario);
     if( inputUsuario =="roxana"){}

}

//// -------estrellas cayendo   -----
function createstar() {
    const star = document.createElement('div');
    star.classList = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 6 + 9 + 's';
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    },  5000);
    
}
setInterval(createstar, 300);
//---------------------


//genero//
if(generofemenino.cheked){
    alert("bienvenida"+inputUsuario);
}else if(generoMasculino.cheked){
    alert("bienvenido"+inputUsuario);

}else{
    alert("hola"+inputUsuario);
}

function motrarUsuario(inputUsuario
){conscontenedorusuario = documen.querySelector("#contenedor-usuarios")

}
