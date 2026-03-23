
console.log("Hola");

function saludar(nombre){
  return "Hola, "+  nombre;
}

console.log(saludar("Pepito"));
console.log(saludar("Pepita"));
console.log(saludar("P"));
console.log(saludar("Pep"));
console.log(saludar("Pedro"));

console.log("soy visible"); 

let carrito = [];
let productos = ["Audifonos", "Teclado", "Linterna","Papitas"]

function agregarProductoCarrito(producto){
    if(productos.includes(producto)){
        carrito.push(producto);
        console.log(`${producto} añadido`);
    } else {
        console.log(`${producto} no está disponible`);
    }
  }

 agregarProductoCarrito("Linterna");
 agregarProductoCarrito("Audifonos");
 agregarProductoCarrito("Teclado");
 agregarProductoCarrito("Pasta");
 agregarProductoCarrito("Papitas");

 console.log("Carrito actual: ", carrito)

