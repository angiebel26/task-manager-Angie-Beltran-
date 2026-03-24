//! Forma de hacerlo en CommonJs
// const Usuario require ("./usuario")

import Usuario from "./usuario.js";
import Producto from "./producto.js";
import { formatearPrecio, validarEmail, calcularDescuento} from "./funciones.js";

let u1 =  new Usuario("Angie", "ang@email.com");
let p1 =  new Producto("Teclado", 250000);



// usando una función que SÍ existe
let precioFinal = calcularDescuento(p1.calcularTotal(), 10);

console.log(u1.saludo());                    
console.log(formatearPrecio(precioFinal));    
console.log(u1);                              

