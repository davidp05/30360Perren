


// let numero = parseInt(prompt("Ingrese un número para generar la tabla de multiplicar"));

// for(let i = 1; i <=10; i++){
//     let multi = numero * i;
//     alert(numero + " x " + i + " = " + multi);
// }

// Pedir nombre

/* let nombre = prompt("Ingresa tu nombre");
let salida  = "Hola" + " " + nombre + " " + "¿Como estás?";
alert(salida); */ 

//Sumar números

// let numero1 = parseInt(prompt("Ingrese un número"));
// let numero2 = parseInt(prompt("Ingrese otro número"));
// let operacion = prompt("Ingrese una operacion");

// if(operacion === "suma"){
//     alert(numero1+numero2);
// }else if (operacion === "resta"){
//     alert(numero1-numero2);
// }else if (operacion === "multiplicacion"){
//     alert(numero1*numero2);
// }else if(operacion === "division"){
    //     alert(numero1 / numero2);
// } else {
//     alert("Se esperaba una operación");
// }



/* var x = prompt("Enter a Value", "0");
var y = prompt("Enter a Value", "0");
var num1 = parseInt(x);
var num2 = parseInt(y); */

//ACTIVIDAD 1
// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = "39";

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// //ACTIVIDAD 2

// const ciudad1 = "Rafaela";
// const ciudad2 = "Sunchales";
// const ciudad3 = "Esperanza";
// const ciudad4 = "Santa fe";
// const ciudad5 = "Rosario";

// console.log(ciudad1);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);

//ACTIVIDAD 3
// const codigo = "B47U89RE243";
// let nombreApellido = "Bart Simpson";
// let direccion = "742 Evergreen Terr";
// let ciudad = "Springfield, USA";
// let nacimiento = "2/11/70";
// let sexo = "M";

// let carnet = "SPRINGFIELD DRIVE LICENCE" +
// "CODIGO: " + codigo +
// "NOMBRE Y APELLIDO: " + nombreApellido + 
// "DIRECCIÓN: " + direccion + 
// "CIUDAD: " + ciudad +
// "NACIMIENTO: " + nacimiento +
// "SEXO: " + sexo;

// console.log(carnet);

//ACTIVIDAD 4

// let personajes = prompt("Nombra los 5 personajes de la familia Simpson, separados por una coma");

// alert(personajes)

//ACTIVIDAD 5

// alert("El siguiente programa calcula el precio de un producto con un porcentaje aplicado");
// alert("En la siguiente ventana, coloque un precio y a continuación coloque el porcentaje de descuento a aplicar");
// let precio = parseInt(prompt("Coloque un precio"));
// let descuento = parseInt(prompt("Coloque un porcentaje de descuento"));

// let resultado = (precio - (precio * (descuento/100)));
// alert("El precio de su producto es " + resultado);

//JAVASCRIPT 2 
//actividad 1

// let nombre = prompt("Ingrese un nombre")

// if (nombre === "David"){
//     alert("Fui yo");
// } else {
//     alert("Yo no fui");
// }

//Actividad 2
// let oprimeTecla = prompt("Oprime una tecla")

// if (oprimeTecla == "y" || oprimeTecla == "Y"){
//     alert("Correcto");
// } else {
//     alert("Incorrecto")
// }

//Actividad 3
// let personaje = prompt("Menu\n Elige tu personaje:\n1: Homero\n2: Marge\n3: Bart\n4: Lisa")

// if(personaje == 1){
//     alert("Elegiste a homero")
// } else if(personaje == 2){
//     alert("Elegiste a Marge")
// } else if(personaje == 3){
//     alert("Elegiste a Bart")
// } else if(personaje == 4){
//     alert("Elegiste a Lisa")
// } else {
//     alert("No seleccionaste un personaje de la lista") 
// }

// let personaje = prompt("Menu\n Elige tu personaje:\n1: Homero\n2: Marge\n3: Bart\n4: Lisa")

//Actividad 4
// let presupuesto = prompt("Colocar un numero para que indique el presupuesto") 

// if(presupuesto == 0 && presupuesto <= 1000){
//     alert("Presupuesto Bajo")
// } else if(presupuesto > 1000 && presupuesto <= 3000){
//     alert("Presupuesto medio")
// } else if(presupuesto > 3000){
//     alert("Presupuesto alto")
// } else if(presupuesto < 0){
//     alert("Tu presupuesto no puede ser negativo")
// } else {
//     alert("No colocaste un número") 
// }

//Actividad 5
// alert("Colocar 4 productos a continuación")
// let producto1 = prompt("Producto 1")
// let producto2 = prompt("Producto 2")
// let producto3 = prompt("Producto 3")
// let producto4 = prompt("Producto 4")

// let productos = ((producto1) + "," + (producto2) + "," + (producto3) + "," + (producto4))

// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
//     alert("Sus productos son: "+ productos)
// } else {
//     alert("Tus productos estan vacios")
// }

// let producto1 = prompt('INGRESAR 1er PRODUCTO');
// let producto2 = prompt('INGRESAR 2do PRODUCTO');
// let producto3 = prompt('INGRESAR 3er PRODUCTO');
// let producto4 = prompt('INGRESAR 4to PRODUCTO');

// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
//     let productos = "1) " + producto1 + " " +
//         "2) " + producto2 + " " +
//         "3) " + producto3 + " " +
//         "4) " + producto4;
//     alert(productos);
// } else {
//     alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
// }


//Javascript 3
//Actividad 1

// let repeticion = parseInt(prompt("Coloque el numero de veces que se va a repetir el mensaje"))

// for (i = 1; i < repeticion ; i++){
//     alert("Hola");
// }

//Actividad 2
// let repeticion = parseInt(prompt("Coloque el numero de veces que se va a repetir el mensaje"))

// for (i = 1; i < repeticion ; i++){
//     if (i == 4){
//         break
//     }
//     alert("Lado");
// }

//Actividad 3

// alert("Ingrese 10 nombres")

// let nombre1 = prompt("Ingrese un nombre")
// let nombre2 = prompt("Ingrese un nombre")
// let nombre3 = prompt("Ingrese un nombre")
// let nombre4 = prompt("Ingrese un nombre")
// let nombre5 = prompt("Ingrese un nombre")
// let nombre6 = prompt("Ingrese un nombre")
// let nombre7 = prompt("Ingrese un nombre")
// let nombre8 = prompt("Ingrese un nombre")
// let nombre9 = prompt("Ingrese un nombre")
// let nombre10 = prompt("Ingrese un nombre")


alert("En el siguiente proceso va a poder conocer más sobre la moto que desea.")
let moto = prompt("ingrese el nombre de la moto:\n1. Wave\n2. Xr150\n3. Xr190\n4. Titan\n5. Tornado");
const motos = [
    {nombre: 'Wave', precio: 230000, colores: "Negro, rojo y blanco", disponible: "Si"},
    {nombre: 'Xr150', precio: 495000, colores: "Negro y blanco", disponible: "Si"},
    {nombre: 'Xr190', precio: 600000, colores: "Negro", disponible: "No"},
    {nombre: 'Titan', precio: 450000, colores: "Negro, rojo y azul", disponible: "Si"},
    {nombre: 'Tornado', precio: 940000, colores: "Rojo y blanco", disponible: "Si"},
];

const result = motos.find((elem) => elem.nombre === moto);
console.log(result);


    // const buscar = motos.find(producto => producto.id === 3)
    // console.log(buscar)
    
    // const existe = motos.some(producto => producto.producto === "Tornado")
    // console.log(existe)
    
    // const barata = motos.filter(producto => producto.precio < 300000)
    // console.log(barata)