"use strict";
// Ejercicio 4: Adaptador para Cambiar la Interfaz de un Sistema de Préstamos Viejo
class SistemaPrestamosViejo {
    prestamos = [];
    registrarPrestamo(prest) {
        this.prestamos.push(prest);
    }
}
class AdaptadorDePrestamos {
    gestorViejo;
    constructor(gestorViejo) {
        this.gestorViejo = gestorViejo;
    }
    prestarLibro(titulo, usuario, fechaDevolucion) {
        const prestamo = { titulo, usuario, fechaDevolucion };
        this.gestorViejo.registrarPrestamo(prestamo);
    }
    listarPrestamos() {
        return this.gestorViejo.prestamos;
    }
}
const sistemaViejo = new SistemaPrestamosViejo();
const adaptador = new AdaptadorDePrestamos(sistemaViejo);
adaptador.prestarLibro("Rayuela", "Milanesa", "2026-09-15");
adaptador.prestarLibro("Lectio Divinitatus", "Lorgar Aurelian", "31005-09-15");
adaptador.prestarLibro("Codex Astartes", "Demetrian Titus", "41000-08-21");
console.log(adaptador.listarPrestamos());
// [{ titulo: "Rayuela", usuario: "Milanesa", fechaDevolucion: "2026-09-15" }]
