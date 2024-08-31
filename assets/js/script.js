import Proyecto from "./POO/proyecto.js";
import Trabajador from "./POO/trabajador.js";

const d = document;

const $tablaProyectoCuerpo = d.createElement("tbody"),
    $tablaProyectosCabecera = d.createElement("thead"),
    $tablaTrabajadoresCuerpo = d.createElement("tbody"),
    $tablaTrabajadoresCabecera = d.createElement("thead");

let proyectos = [
    new Proyecto("Ejercicio Individual 1"),
    new Proyecto("Ejercicio Grupal 1"),
    new Proyecto("Ejercicio Individual 2"),
    new Proyecto("Ejercicio Grupal 2"),
    new Proyecto("Ejercicio Individual 3")
],
    trabajadores = [{
        nombreProyecto: "Ejercicio Individual 1",
        nombreTrabajador: "Mauricio",
        rutTrabajador: "20497354-7",
        cargoTrabajador: "Estudiante"
    },
    {
        nombreProyecto: "Ejercicio Individual 2",
        nombreTrabajador: "Pedro",
        rutTrabajador: "19563849-6",
        cargoTrabajador: "Estudiante"
    },
    {
        nombreProyecto: "Ejercicio Grupal 1",
        nombreTrabajador: "Juan",
        rutTrabajador: "16473659-2",
        cargoTrabajador: "Profesor"
    },
    {
        nombreProyecto: "Ejercicio Individual 1",
        nombreTrabajador: "Miguel",
        rutTrabajador: "18473947-1",
        cargoTrabajador: "Estudiante"
    },
];

const buscarProyecto = nombreProyecto => proyectos.find(proyecto => proyecto.getNombreProyecto() === nombreProyecto)

proyectos.forEach(proyecto => mostrarProyectos(proyecto));
trabajadores.forEach(trabajador => {
    const nuevoTrabajador = new Trabajador(trabajador.nombreTrabajador, trabajador.rutTrabajador, trabajador.cargoTrabajador);
    agregarTrabajador(trabajador.nombreProyecto, nuevoTrabajador);
})

function obtenerNombreProyecto() {
    let nombreProyecto = d.getElementById("nombreProyectoBuscado").value;
    let proyecto = buscarProyecto(nombreProyecto);
    if(proyecto) {
        proyecto.mostrarTrabajadores()
        d.getElementById("nombreProyectoBuscado").value = "";
    } else {
        alert(`El proyecto ${nombreProyecto} no existe`)
    }
}

function registrarProyectos() {
    const proyecto = new Proyecto(d.getElementById("nombreProyecto").value);
    proyectos.push(proyecto);
    mostrarProyectos(proyecto);
    d.getElementById("nombreProyecto") = "";
}

function registrarTrabajadores() {
    const nombreProyecto = d.getElementById("nombreProyectoRegistrado").value,
        nombreTrabajador = d.getElementById("nombreTrabajador").value,
        rutTrabajador = d.getElementById("rutTrabajador").value,
        cargoTrabajador = d.getElementById("cargoTrabajador").value;

    let proyecto = buscarProyecto(nombreProyecto);
    if(proyecto) {
        const trabajador = new Trabajador(
            nombreTrabajador, 
            rutTrabajador, 
            cargoTrabajador
        );
        trabajadores.push({nombreProyecto: nombreProyecto,
            nombreTrabajador: nombreTrabajador,
            rutTrabajador: rutTrabajador,
            cargoTrabajador: cargoTrabajador
        });
        agregarTrabajador(nombreProyecto, trabajador);
        d.getElementById("nombreProyectoRegistrado").value = "";
        d.getElementById("nombreTrabajador").value = "";
        d.getElementById("rutTrabajador").value = "";
        d.getElementById("cargoTrabajador").value = "";
    } else {
        alert(`El proyecto ${nombreProyecto} no existe`)
    }
}

function agregarTrabajador(nombreProyecto, trabajador) {
    let proyecto = buscarProyecto(nombreProyecto);
    proyecto.registrarTrabajador(trabajador);
    mostrarTrabajadores();
}

function mostrarTrabajadores() {
    const $tablaTrabajadores = d.getElementById("tablaTrabajadores");
    $tablaTrabajadoresCabecera.innerHTML = `
        <tr>
            <th>Nombre de Proyecto</th>
            <th>Nombre Trabajador</th>
            <th>Rut Trabajador</th>
            <th>Cargo Trabajador</th>
        </tr>
    `
    $tablaTrabajadores.appendChild($tablaTrabajadoresCabecera);
    $tablaTrabajadoresCuerpo.innerHTML = "";
    trabajadores.forEach(trabajador => {
        $tablaTrabajadoresCuerpo.innerHTML += `
            <tr>
                <td>${trabajador.nombreProyecto}</td>
                <td>${trabajador.nombreTrabajador}</td>
                <td>${trabajador.rutTrabajador}</td>
                <td>${trabajador.cargoTrabajador}</td>
            </tr>
        `
        $tablaTrabajadores.appendChild($tablaTrabajadoresCuerpo);
    })
}

function mostrarProyectos(proyecto) {
    const $tablaProyectos = d.getElementById("tablaProyectos");
    $tablaProyectosCabecera.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre de Proyecto</th>
        </tr>
    `
    $tablaProyectos.appendChild($tablaProyectosCabecera);
    $tablaProyectoCuerpo.innerHTML += `
        <tr>
            <td>${proyecto.getIdProyecto()}</td>
            <td>${proyecto.getNombreProyecto()}</td>
        </tr>
    `;
    $tablaProyectos.appendChild($tablaProyectoCuerpo);
}

d.getElementById("registrarProyectoBtn").addEventListener("click", e => {
    registrarProyectos();
})

d.getElementById("registrarTrabajadorBtn").addEventListener("click", e => {
    registrarTrabajadores();
})

d.getElementById("buscarProyectoBtn").addEventListener("click", e => {
    obtenerNombreProyecto();
})