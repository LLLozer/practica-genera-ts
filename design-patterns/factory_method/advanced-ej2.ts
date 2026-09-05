// Ejercicio 2: Implementar Patrón Factory Method para Crear Usuarios

// Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de usuarios de la biblioteca.

// Crear una clase UsuarioFactory con un método crearUsuario que, basado en el tipo de usuario ("Estudiante", "Docente", "Externo"), 
// devuelva una instancia de la clase adecuada.

// Crear clases específicas para cada tipo de usuario (Estudiante, Docente, Externo), cada una con sus propias propiedades 
// (Ej.: limitePrestamos, diasDevolucion).
// Estas clases deben implementar una interfaz común que declare el método detalles(), 
// para que crearUsuario devuelva siempre un tipo uniforme sin importar el usuario concreto que construya.

interface Usuario {
    detalles(): string
}

class UsuarioEstudiante implements Usuario {

    constructor(public nombre: string, public limitePrestamos: number, public diasDevolucion: number) {}

    detalles(): string {
        return `Estudiante, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Dias de Devolución: ${this.diasDevolucion}`
    }
}

class UsuarioDocente implements Usuario {

    constructor(public nombre: string, public limitePrestamos: number, public diasDevolucion: number) {}

    detalles(): string {
        return `Docente, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Días de Devolución: ${this.diasDevolucion}`
    }
}

class UsuarioExterno implements Usuario {

    constructor(public nombre: string, public limitePrestamos: number, public diasDevolucion: number) {}

    detalles(): string {
        return `Externo, Nombre: ${this.nombre}, Límite de Préstamos: ${this.limitePrestamos}, Días de Devolución: ${this.diasDevolucion}`
    }
}

class UsuarioFactory {

    crearUsuario(tipo: string, nombre: string, limitePrestamos: number, diasDevolucion: number): Usuario {
        switch (tipo) {
            case "Estudiante":
                return new UsuarioEstudiante(nombre, limitePrestamos, diasDevolucion);
            case "Docente":
                return new UsuarioDocente(nombre, limitePrestamos, diasDevolucion);
            case "Externo":
                return new UsuarioExterno(nombre, limitePrestamos, diasDevolucion)
        }
        throw new Error("El tipo ingresado no es válido")
    }
}

const factory = new UsuarioFactory();
const estudiante = factory.crearUsuario("Estudiante", "Milanesa", 3, 10);
console.log(estudiante.detalles());
const docente = factory.crearUsuario("Docente", "Gerolamo Cardano", 4, 12)
console.log(docente.detalles())
const externo = factory.crearUsuario("Externo", "Gregor Eisenhorn", 24, 90)
console.log(externo.detalles())
// Tipo: Estudiante, Nombre: Milanesa, Límite de préstamos: 3