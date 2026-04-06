class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  calcularTotal() {
    return this.precio * 1.19;
  }
}

export default Producto;