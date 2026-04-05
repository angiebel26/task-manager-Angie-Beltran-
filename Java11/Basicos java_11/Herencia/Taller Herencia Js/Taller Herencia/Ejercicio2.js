
//!Ejercicio2 Biblioteca de Contenido
// 2.1 Clase base: Contenido

class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return `${this.titulo} - ${this.genero} - ${this.anio}`;
    }

    retirar() {
        this.disponible = false;
        return `${this.titulo} ha sido retirado`;
    }

    estado() {
        return this.disponible ? "Disponible" : "Retirado";
    }
}

// 2.2 Clases Extendidas
//! Clases Extendidas Pelicula 
class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    ficha() {
        return `${super.ficha()} - ${this.duracionFormateada()}`;
    }
}

// 2.2 Clases extendidas: Pelicula y Serie

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `${super.ficha()} - ${this.temporadas} temporadas - ${this.totalEpisodios()} episodios`;
    }
}

// 2.3 Catalogo Completo
// Peliculas
let p1 = new Pelicula("Wicked", "Musical", 2024, 160);
let p2 = new Pelicula("Super Mario Bros", "Animacion", 2023, 92);
let p3 = new Pelicula("Barbie Moda en Paris", "Animacion", 2010, 79);

// Series
let s1 = new Serie("El Juego del Calamar", "Drama", 2021, 1);
let s2 = new Serie("Spiderman", "Accion", 2020, 2);
let s3 = new Serie("The Crown", "Drama", 2016, 6);

// Registrar episodios
s1.registrarEpisodios(9);
s2.registrarEpisodios(10);
s3.registrarEpisodios(10);

// Catálogo
let catalogo = [p1, p2, p3, s1, s2, s3];

// 3. recorrer catálogo
console.log("=== CATÁLOGO ===");
for (let item of catalogo) {
    console.log(item.ficha());
}

// 4. retirar dos contenidos
console.log("\n=== RETIROS ===");
console.log(p1.retirar());
console.log(s2.retirar());

// verificar estado
console.log(p1.estado());
console.log(s2.estado());

// 5. contar disponibles
let disponibles = catalogo.filter(item => item.disponible).length;
console.log("\nContenido disponible:", disponibles); 