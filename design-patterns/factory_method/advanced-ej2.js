"use strict";
// Ejercicio 2: Implementar Patrón Factory Method para Crear Usuarios
class UsuarioEstudiante {
    nombre;
    limitePrestamos;
    diasDevolucion;
    constructor(nombre, limitePrestamos, diasDevolucion) {
        this.nombre = nombre;
        this.limitePrestamos = limitePrestamos;
        this.diasDevolucion = diasDevolucion;
    }
    detalles() {
        return `Estudiante, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Dias de Devolución: ${this.diasDevolucion}`;
    }
}
class UsuarioDocente {
    nombre;
    limitePrestamos;
    diasDevolucion;
    constructor(nombre, limitePrestamos, diasDevolucion) {
        this.nombre = nombre;
        this.limitePrestamos = limitePrestamos;
        this.diasDevolucion = diasDevolucion;
    }
    detalles() {
        return `Docente, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Días de Devolución: ${this.diasDevolucion}`;
    }
}
class UsuarioExterno {
    nombre;
    limitePrestamos;
    diasDevolucion;
    constructor(nombre, limitePrestamos, diasDevolucion) {
        this.nombre = nombre;
        this.limitePrestamos = limitePrestamos;
        this.diasDevolucion = diasDevolucion;
    }
    detalles() {
        return `Externo, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Días de Devolución: ${this.diasDevolucion}`;
    }
}
class UsuarioFactory {
    crearUsuario(tipo, nombre, limitePrestamos, diasDevolucion) {
        switch (tipo) {
            case "Estudiante":
                return new UsuarioEstudiante(nombre, limitePrestamos, diasDevolucion);
            case "Docente":
                return new UsuarioDocente(nombre, limitePrestamos, diasDevolucion);
            case "Externo":
                return new UsuarioExterno(nombre, limitePrestamos, diasDevolucion);
        }
        throw new Error("El tipo ingresado no es válido");
    }
}
const factory = new UsuarioFactory();
const estudiante = factory.crearUsuario("Estudiante", "Milanesa", 3, 10);
console.log(estudiante.detalles());
const docente = factory.crearUsuario("Docente", "Gerolamo Cardano", 4, 12);
console.log(docente.detalles());
const externo = factory.crearUsuario("Externo", "Gregor Eisenhorn", 24, 90);
console.log(externo.detalles());
// Tipo: Estudiante, Nombre: Milanesa, Límite de préstamos: 3
