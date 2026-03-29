
/*Variable categoria*/

let tareas = [];
let completadas = 0;


 /* Categoria Nueva */
const input = document.getElementById("nuevaTarea");
const select = document.getElementById("categoria");
const otraInput = document.getElementById("otraCategoria");
const lista = document.getElementById("listaTareas");
const totalSpan = document.getElementById("total");
const completadasSpan = document.getElementById("completadas");
const error = document.getElementById("error");


   /*Mostrar categoria */

select.addEventListener("change", () => {
    if (select.value === "otra") {
        otraInput.style.display = "block";
    } else {
        otraInput.style.display = "none";
    }
});

  /*Agregar Tarea*/
function agregarTarea() {

    const texto = input.value.trim();
    let categoria = select.value;

    /* Validación*/
    if (texto === "") {
        error.classList.remove("d-none");
        return;
    }

    error.classList.add("d-none");

    /*Si es "otra tarea se agrega la opcion"*/
    if (categoria === "otra") {
        categoria = otraInput.value.trim() || "➕ Otra";
    }

    /* Crear tarea */
    const tarea = {
        texto: texto,
        categoria: categoria,
        hecha: false,
        urgente: false
    };

    tareas.push(tarea);
    console.log("Tarea agregada:", tarea);

    mostrarTareas();

    /* Limpiar campos */
    input.value = "";
    otraInput.value = "";
    select.value = "";
    otraInput.style.display = "none";
}

  /* Mostrar Tareas */
function mostrarTareas() {

    lista.innerHTML = "";
    completadas = 0;

    tareas.forEach((tarea, index) => {

        if (tarea.hecha === true) completadas++;

        const div = document.createElement("div");
        div.className = "card p-3 shadow-sm rounded-3";

        // Estilo tarea hecha
        if (tarea.hecha === true) {
            div.classList.add("bg-light", "text-decoration-line-through");
        }

        // Estilo tarea urgente
        if (tarea.urgente === true) {
            div.classList.add("border", "border-danger");
        }

        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${tarea.categoria} ${tarea.texto}</span>

                <div class="d-flex gap-2">
                    <button onclick="tareaHecha(${index})" class="btn btn-sm btn-success">✅</button>
                    <button onclick="tareaImportante(${index})" class="btn btn-sm btn-warning">⚠️</button>
                    <button onclick="eliminarTarea(${index})" class="btn btn-sm btn-danger">❌</button>
                </div>
            </div>
        `;

        lista.appendChild(div);
    });

    actualizarContador();
}


   /* Tarea Hecha */
function tareaHecha(index) {
    tareas[index].hecha = !tareas[index].hecha;
    console.log("Cambio hecha:", tareas[index]);
    mostrarTareas();
}


 /* Tarea Importante */
function tareaImportante(index) {
    tareas[index].urgente = !tareas[index].urgente;
    console.log("Cambio urgente:", tareas[index]);
    mostrarTareas();
}


     /* Eliminar Tarea */
function eliminarTarea(index) {

    const ok = confirm("¿Eliminar esta tarea?");

    if (ok) {
        tareas.splice(index, 1);
        console.log("Tarea eliminada");
        mostrarTareas();
    }
}


 /*Limpiar tareas completadas */
function limpiartareasCompletadas() {

    const cantidad = tareas.filter(t => t.hecha).length;

    if (cantidad === 0) return;

    const ok = confirm(`¿Eliminar ${cantidad} tareas completadas?`);

    if (ok) {
        // 🔥 eliminar correctamente todas las tareas hechas
        tareas = tareas.filter(t => !t.hecha);

        console.log("Completadas eliminadas correctamente");
        mostrarTareas();
    }
}
    /*Actualizar Contador*/
function actualizarContador() {
    totalSpan.textContent = tareas.length;
    completadasSpan.textContent = completadas;
}

