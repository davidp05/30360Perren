


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

// let alumnos = '';
// for (let index = 0; index < 10; index++) {
//     alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(alumnos);

// alert("Ingrese 10 nombres")

// const listaNombres = []
// let cantidad = 10

// do{
//     let entrada = prompt("Ingrese un nombre y apellido");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// } while(listaNombres.length != cantidad)

// const nuevaLista = listaNombres.concat();

// alert(nuevaLista.join("\n"));

//Actividad 4
// const listaNombres = []
// let entrada = prompt("Ingresar un nombre");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "Voldemort" ){
//     listaNombres.push(entrada);
//     const nuevaLista = listaNombres.concat();
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es Voldemort.
//     entrada = prompt("Ingresar otro nombre");
// }
// alert("No tenias que nombrarlo");
// alert(nuevaLista.join("\n"));

//actividad 5
// const listaProductos = []
// let entrada = prompt("Ingresa un numero del 1 al 4");

// //repetimos con while hasta que coloque "ESC"
//  while(entrada != "ESC"){
//      if (entrada === "1"){
//          listaProductos.push("Tomate");
//      } else if (entrada === "2"){
//          listaProductos.push("Papa");
//      } else if (entrada === "3"){
//          listaProductos.push("Carne");
//      } else if (entrada === "4"){
//         listaProductos.push("Pollo");
//      } else {
//          alert("No ingresaste el numero correspondiente");
//      }
//     }
// const nuevaLista = listaProductos.concat()
// alert(nuevaLista.join("\n"));


// alert("En el siguiente proceso va a poder conocer más sobre la moto que desea.")
// let moto = prompt("ingrese el nombre de la moto:\n1. Wave\n2. Xr150\n3. Xr190\n4. Titan\n5. Tornado");
// const motos = [
//     {nombre: 'Wave', precio: 230000, colores: "Negro, rojo y blanco", disponible: "Si"},
//     {nombre: 'Xr150', precio: 495000, colores: "Negro y blanco", disponible: "Si"},
//     {nombre: 'Xr190', precio: 600000, colores: "Negro", disponible: "Si"},
//     {nombre: 'Titan', precio: 450000, colores: "Negro, rojo y azul", disponible: "Si"},
//     {nombre: 'Tornado', precio: 940000, colores: "Rojo y blanco", disponible: "Si"},
// ];

// const result = motos.find((elem) => elem.nombre === moto);
// alert("Seleccionaste la moto "+result.nombre+" su precio es de: $"+result.precio+" su color puede ser: "+" "+result.colores+" ¿Quieres saber si se encuentra disponible? La respuesta es: "+result.disponible+" "+".Aguardamos tu compra. Gracias")


// const buscar = motos.find(producto => producto.id === 3)
// console.log(buscar)
    
// const existe = motos.some(producto => producto.producto === "Tornado")
// console.log(existe)
    
// const barata = motos.filter(producto => producto.precio < 300000)
// console.log(barata)

// function respuestaClick(){
//     console.log("Respuesta evento click")
// }
//     let evento = prompt("Ingrese el evento")
//     let boton = document.getElementById
//     ("btnPrincipal");
//     if(evento === "click"){
//         boton.addEventListener(evento, respuestaClick);
//     }

// E - commerce

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let contenedor = document.createElement("h1");
  contenedor.innerHTML = `${sessionStorage.getItem("usuario")}`;
  document.body.append(contenedor);
}else{
  usuario = prompt("ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
}

const contenedor = document.getElementById("productos");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];

const PRODUCTOS = [
    {
        id: 1,
        nombre: "Tornado 250",
        precio: 1500000,
        stock: 5,
        imagen: "https://motos.honda.com.ar/uploads/modelos/28/images/sliders/115_0s-0diseno-tornado-perfil-der.jpg"
    },
    {
        id: 2,
        nombre: "Titan 150",
        precio: 500000,
        stock: 10,
        imagen: "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-0web-cgtitan-color-blanco.jpg"
    },
    {
        id: 3,
        nombre: "Wave",
        precio: 1500,
        stock: 0,
        imagen: "https://motos.honda.com.ar/uploads/modelos/21/images/colores/21c-0web-wave-2020-roja.jpg"
    }
];

const getCard = (item) => {
    return (
        `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <p class="card-text">Stock: ${item.stock}</p>
                <button onclick=agregarCarrito(${item.id}) class="btn ${item.stock ? 'btn-primary' : 'btn-secondary'}" ${!item.stock ? 'disabled' : '' } >Agregar al carrito</button>
            </div>
        </div>
    `);
};

const getRow = (item) => {
    return(
        `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>$${item.precio * item.cantidad} ($${item.precio})</td>
        <td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
    </tr>
        `
    )
}


// función flecha
const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = PRODUCTOS.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1,
            imagen: seleccion.imagen,
        })
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
    }
    
    cargarProductos(carrito, tablaCarrito, true);
}

cargarProductos(PRODUCTOS, contenedor, false);

