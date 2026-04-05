class Empleado {
    constructor(nombre, cargo, salario){
        this.nombre = nombre;
        this.cargo  = cargo;
        this.salario = salario;
        this.activo  = true;
    }
    presentarse (){
        return `Hola ${this.nombre} + ${this.cargo}`;
    }

   calcularSalarioAnual(){
    return this.salario *12;
   }
   desactivar(){
    return this.activo? "Activo" : "Inactivo";
   }

   info(){
    return `Hola ${this.nombre} + ${this.cargo} + ${this.salario} + ${this.activo}` 
   }
}

  let empleado1 = new Empleado("Fernando","Ceo", parseFloat(1500000))
  console.log(empleado1)

  let empleado2 = new Empleado("Lucelly","Ceo", parseFloat(1000000))
  console.log(empleado2)

  let empleado3 = new Empleado("Valeria","Ceo", parseFloat(10000000))
  console.log(empleado3)

  let empleado4 = new Empleado("Zully","Ceo", parseFloat(1000000))
  console.log(empleado4)

//! 1.2 Clase Extendida Lider

class Lider extends Empleado {

    constructor(nombre, salario, equipo){
        super(nombre, "Lider de equipo", salario);
        this.equipo = equipo;
    }

    presentarEquipo(){
        return `Mi equipo está conformado por: ${this.equipo.join(", ")}`;
    }

    agregarMiembro(nombre){
        this.equipo.push(nombre);
    }

    info(){
        return `El equipo tiene ${this.equipo.length} personas`;
    }
}

let lider1 = new Lider("Carlos", 12000000, ["Miluu","Andrea","Yiseth"]);
let lider2 = new Lider("Liliana", 1000000, ["Carmen","Cecilia","Yuli"]);

lider1.agregarMiembro("Maria");

console.log(lider1.presentarEquipo());
console.log(lider1.info());

console.log("El salario anual del lider1 es : "+lider1.calcularSalarioAnual())
console.log(lider1.presentarEquipo(console.log(lider1.info())))


// 1.3 

let empleadoRegular1 = new Empleado ("Fernando","CEO",parseFloat(15000000))
let empleadoRegular2 = new Empleado ("Luselly","Developer",parseFloat(10000000))
let empleadoRegular3 = new Empleado ("Fernando","CEO",parseFloat(15000000))
let empleadoRegular4 = new Empleado ("Luselly","Developer",parseFloat(10000000))
let empleadoLider1 = new Lider("Miguel",parseFloat(12000000),["Lucia","Pedro","Maria"])
let empleadoLider2 = new Lider("Lucas",parseFloat(12000000),["Pedro","Pedro","Lucas"])

let empleados = [empleadoRegular1, empleadoRegular2,empleadoRegular3,empleadoRegular4,empleadoLider1,empleadoLider2]

const totalNomina = empleados.reduce((total, emp) => total + emp.salario, 0);

console.log("Total de la nómina:", totalNomina);

console.log("Costo anual total:", totalNomina * 12);


empleadoRegular1.activo = false;

console.log("Empleado desactivado:");
console.log(empleadoRegular1.info());


// ✅ 5. info y equipo de cada líder
console.log("Lider 1:");
console.log(empleadoLider1.info());
console.log(empleadoLider1.presentarEquipo());

console.log("Lider 2:");
console.log(empleadoLider2.info());
console.log(empleadoLider2.presentarEquipo());