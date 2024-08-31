export default class Trabajador {
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