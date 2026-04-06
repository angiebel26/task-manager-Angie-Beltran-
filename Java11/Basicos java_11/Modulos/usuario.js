class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    saludo() {
        return `Hola, soy ${this.nombre} y mi email es ${this.email}`;
    }
}

//! module.exports 
// module.exports = Usuario;
export default Usuario; //Aqui estamos exportando