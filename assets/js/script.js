class Proyecto {
    static contadorId = 0;

    constructor(nombreProyecto) {
        this.idProyecto = Proyecto.contadorId++;
        this.nombreProyecto = nombreProyecto;
        this.trabajadores = [];
    }

    getNombre = () => this.nombreProyecto;
    setNombreProyecto = nombreProyecto => this.nombreProyecto = nombreProyecto;

    getTrabajadores = () => this.trabajadores;
    setTrabajadores = trabajadores => this.trabajadores = trabajadores;

    registrarTrabajador = trabajador => this.trabajadores.push(trabajador);

    buscarTrabajadorPorNombre = nombre => this.trabajadores.find(trabajador => trabajador.nombre === nombre);

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

const proyecto1 = new Proyecto("Ejercicio Grupal 1");
const proyecto2 = new Proyecto("Ejercicio Grupal 2");

const trabajador1 = new Trabajador("Mauricio", 20497354-7, "Estudiante");
const trabajador2 = new Trabajador("Pedro", 20235759-2, "Estudiante");
proyecto1.registrarTrabajador(trabajador1);
proyecto1.registrarTrabajador(trabajador2);

console.log(proyecto1.mostrarDatos());