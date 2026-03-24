class Usuario {
    constructor(nombre,email) {
      this.nombre = nombre;
      this.email = email;
    }
   saludo() {
    return "Hola soy " + this.nombre;

   }
}

//! module.exports = Usuario; ← forma antes de EcmaScript de hacer modulos
export default Usuario;