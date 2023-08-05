export default class Persona {
    #seudo = "hola";
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    setDni(dni){
        this.dni = dni;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getDni () {
        return this.dni;
    }
    toString(){
        return `${this.nombre} ${this.apellido} ${this.dni}`;
    }
}