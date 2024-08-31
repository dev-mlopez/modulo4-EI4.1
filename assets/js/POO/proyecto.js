export default class Proyecto {
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

    mostrarTrabajadores = () => {
        const $tablaTrabajadoresPorProyecto = document.getElementById("tablaTrabajadoresPorProyecto"),
            $tablaCuerpo = document.createElement("tbody");

        $tablaTrabajadoresPorProyecto.innerHTML = `
            <caption>Trabajadores del proyecto <span>"${this.getNombreProyecto()}"</span></caption>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Rut</th>
                    <th>Cargo</th>
                </tr>
            </thead>
        `
        this.trabajadores.forEach(trabajador => {
            $tablaCuerpo.innerHTML += `
                <tr>
                    <td>${trabajador.getNombre()}</td>
                    <td>${trabajador.getRut()}</td>
                    <td>${trabajador.getCargo()}</td>
                </tr>
            `
            $tablaTrabajadoresPorProyecto.appendChild($tablaCuerpo);
        })
    }
}