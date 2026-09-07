"use strict";
// Ejercicio 3: Implementar Patrón Observer para Seguimiento de Préstamos
class Estadisticas {
    notificar(libro) {
        console.log(`Estadísticas notificado: ${libro.titulo} cambió su disponibilidad a ${libro.disponible}`);
    }
}
class Libro {
    titulo;
    autor;
    disponible;
    observadores = [];
    constructor(titulo, autor, disponible) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    agregarObservador(obs) {
        this.observadores.push(obs);
    }
    notificarObservadores() {
        this.observadores.forEach(obs => {
            obs.notificar(this);
        });
    }
    cambiarDisponibilidad(estadoNuevo) {
        this.disponible = estadoNuevo;
        this.notificarObservadores();
    }
}
const estadisticas = new Estadisticas();
const libro = new Libro("Rayuela", "Julio Cortázar", true);
libro.agregarObservador(estadisticas);
libro.cambiarDisponibilidad(false);
const libro2 = new Libro("Cielo muerto, sol negro", "Graham McNeil", false);
libro2.agregarObservador(estadisticas);
libro2.cambiarDisponibilidad(true);
// Estadisticas notificado: Rayuela cambió su disponibilidad a false.
