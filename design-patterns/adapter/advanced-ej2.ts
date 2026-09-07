// Ejercicio 4: Adaptador para Cambiar la Interfaz de un Sistema de Préstamos Viejo

// Objetivo: Implementar el patrón Adaptador para integrar un sistema antiguo de préstamos con el nuevo sistema de biblioteca.

// Crear una clase SistemaPrestamosViejo que tenga un método registrarPrestamo.
// Definir explícitamente la interfaz GestorDePrestamos (el contrato objetivo, con prestarLibro y listarPrestamos) que espera el sistema nuevo.

// Implementar una clase AdaptadorDePrestamos que implemente esa interfaz y permita utilizar SistemaPrestamosViejo 
// (con su método registrarPrestamo) donde el sistema nuevo espera un GestorDePrestamos, traduciendo las llamadas internamente.

interface Prestamo {
    titulo: string
    usuario: string
    fechaDevolucion: string
}

class SistemaPrestamosViejo {

    prestamos: Prestamo[] = []

    registrarPrestamo(prest: Prestamo): void {
        this.prestamos.push(prest)
    } 
}

interface GestorDePrestamos {
    
    prestarLibro(titulo: string, usuario: string, fechaDevolucion: string): void
        
    listarPrestamos(): Prestamo[]
}

class AdaptadorDePrestamos implements GestorDePrestamos {

    constructor(public gestorViejo: SistemaPrestamosViejo) {}

    prestarLibro(titulo: string, usuario: string, fechaDevolucion: string): void {
        const prestamo: Prestamo = { titulo, usuario, fechaDevolucion }
        this.gestorViejo.registrarPrestamo(prestamo)
    }

    listarPrestamos(): Prestamo[] {
        return this.gestorViejo.prestamos
    }

}

const sistemaViejo = new SistemaPrestamosViejo();
const adaptador = new AdaptadorDePrestamos(sistemaViejo);
adaptador.prestarLibro("Rayuela", "Milanesa", "2026-09-15");
adaptador.prestarLibro("Lectio Divinitatus", "Lorgar Aurelian", "31005-09-15")
adaptador.prestarLibro("Codex Astartes", "Demetrian Titus", "41000-08-21")
console.log(adaptador.listarPrestamos());
// [{ titulo: "Rayuela", usuario: "Milanesa", fechaDevolucion: "2026-09-15" }]