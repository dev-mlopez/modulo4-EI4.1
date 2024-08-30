class Proyecto {
    static contadorId = 0;

    constructor(nombreProyecto) {
        this.idProyecto = Proyecto.contadorId++;
        this.nombreProyecto = nombreProyecto;
        this.trabajadores = [];
    }

    getIdProyecto = () => this.idProyecto;

    getNombreProyecto = () => this.nombreProyecto;
    setNombreProyecto = nombreProyecto => this.nombreProyecto = nombreProyecto;

    getTrabajadores = () => this.trabajadores;
    setTrabajadores = trabajadores => this.trabajadores = trabajadores;

    registrarTrabajador = trabajador => this.trabajadores.push(trabajador);

    buscarTrabajadorPorNombre = nombre => this.trabajadores.find(trabajador => trabajador.nombre === nombre);

    mostrarTrabajadores($tablaTrabajadores) {
        // this.trabajadores.forEach(trabajador => {
        //     $tablaTrabajadoresCuerpo.innerHTML += `
        //         <tr>
        //             <td>${this.getNombreProyecto()}</td>
        //             <td>${trabajador.getNombre()}</td>
        //             <td>${trabajador.getRut()}</td>
        //             <td>${trabajador.getCargo()}</td>
        //         </tr>
        //     `;
        //     $tablaTrabajadores.appendChild($tablaTrabajadoresCuerpo);
        // })
        console.log(trabajadores)
            $tablaTrabajadoresCuerpo.innerHTML += `
                <tr>
                    <td>${this.getNombreProyecto()}</td>
                    <td>${trabajadores.getNombre()}</td>
                    <td>${trabajadores.getRut()}</td>
                    <td>${trabajadores.getCargo()}</td>
                </tr>
            `;
            $tablaTrabajadores.appendChild($tablaTrabajadoresCuerpo);
    }

    mostrarDatos = () => {
        let texto = `Datos del proyecto: \nID: ${this.idProyecto} \nNombre del proyecto: ${this.nombreProyecto} \nDatos de trabajadores registrados en el proyecto:\n---------`;
        this.trabajadores.forEach((trabajador) => 
            texto += `\nID: ${trabajador.getIdTrabajador()}\nNombre: ${trabajador.getNombre()}\nRut: ${trabajador.getRut()}\nCargo: ${trabajador.getCargo()}\n---------`);
        return texto;
    }
}

class Trabajador {
    static contadorId = 0;

    constructor(nombre, rut, cargo) {
        this.idTrabajador = Trabajador.contadorId++;
        this.nombre = nombre;
        this.rut = rut;
        this.cargo = cargo;
    }

    getIdTrabajador = () => this.idTrabajador;

    getNombre = () => this.nombre;
    setNombre = nombre => this.nombre = nombre;

    getRut = () => this.rut;
    setRut = (rut) => this.rut = rut;

    getCargo = () => this.cargo;
    setCargo = (cargo) => this.cargo = cargo;

    mostrarDatos = () => `Datos trabajador: \nID: ${this.idTrabajador} \nNombre: ${this.nombre}, \nRut: ${this.rut}, \nCargo: ${this.cargo}`;
}

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
    }
];

const buscarProyecto = nombreProyecto => proyectos.find(proyecto => proyecto.getNombreProyecto() === nombreProyecto)

proyectos.forEach(proyecto => mostrarProyectos(proyecto));
trabajadores.forEach(trabajador => {
    const nuevoTrabajador = new Trabajador(trabajador.nombreTrabajador, trabajador.rutTrabajador, trabajador.cargoTrabajador);
    agregarTrabajador(trabajador.nombreProyecto, nuevoTrabajador);
})

function registrarProyectos() {
    const nombreProyecto = d.getElementById("nombreProyecto").value;
    const proyecto = new Proyecto(nombreProyecto);
    proyectos.push(proyecto);
    mostrarProyectos(proyecto);
    const $nombreProyecto = d.getElementById("nombreProyecto")
    $nombreProyecto.value = "";
}

function registrarTrabajadores() {
    const nombreProyecto = d.getElementById("nombreProyectoRegistrado").value,
        nombreTrabajador = d.getElementById("nombreTrabajador").value,
        rutTrabajador = d.getElementById("rutTrabajador").value,
        cargoTrabajador = d.getElementById("cargoTrabajador").value;

    let proyecto = buscarProyecto(nombreProyecto);
    if(proyecto) {
        const trabajador = new Trabajador(
            d.getElementById("nombreTrabajador").value, 
            d.getElementById("rutTrabajador").value, 
            d.getElementById("cargoTrabajador").value
        );
        console.log("buscando")
        trabajadores.push({nombreProyecto: nombreProyecto,
            nombreTrabajador: nombreTrabajador,
            rutTrabajador: rutTrabajador,
            cargoTrabajador: cargoTrabajador
        });
        agregarTrabajador(nombreProyecto, trabajador);
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