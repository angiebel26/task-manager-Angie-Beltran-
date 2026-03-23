//! Creando mi objecto producto

//! Creando mi objeto producto

let producto = {
    nombre: "Cheetos",
    precio: 24000,
    marca: "Lay",
    stock: 12,

    // Método para calcular IVA
    calcularIVa: function () {
        return this.precio * 0.19;
    },

    calcularTotal: function () {
        return this.precio + this.calcularIVa();
    },

    tengoStock: function (minimo) {
        return this.stock >= minimo;
    }
};

//! Leyendo las propiedades
console.log(producto.nombre);
console.log(producto.precio);

//! Simule la venta del producto 
producto.stock = producto.stock - 1;
console.log(producto.stock);

//! Llamar al metodo
console.log(producto.calcularIVa());
console.log(producto.calcularTotal());


//? ===============================================================
//! Funcion constructora

let producto1 = {
    nombre: "Papitas",
    precio: 35000,
    marca: "GEN11",
    stock: 12,
    calcularIVa: function(){
        return this.precio * 0.19;
    },
};

let producto2 = {
    nombre: "Papitas",
    precio: 35000,
    marca: "GEN11",
    stock: 12,
    calcularIVa: function(){
        return this.precio * 0.19;
    },
};


function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.calcularIVa = function () {
        return this.precio * 0.19;
    };

    this.calcularTotal = function () {
        return this.precio + this.calcularIVa();
    };
}

//! Creando instancias
let papitas = new Producto("Papitas Saladas", 40000);
let papitas_Francesas = new Producto("Papitas Francesas", 40000);
let papitas_dulces = new Producto("Papitas Dulces", 40000);

//! Mostrando resultados
console.log(papitas);
console.log(papitas_Francesas);
console.log(papitas_dulces);

console.log(papitas.calcularTotal());

