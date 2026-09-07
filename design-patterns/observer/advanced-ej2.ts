// Ejercicio 3: Implementar Patrón Observer para Seguimiento de Préstamos

// Objetivo: Utilizar el patrón Observer para notificar a un módulo de estadísticas cuando un libro cambia su disponibilidad.

// Crear una clase Estadisticas que actúe como observador y reciba notificaciones cuando la disponibilidad de un libro cambie.
// Implementar la clase Libro que permita agregar observadores y notifique a los observadores cuando su disponibilidad cambie.

// Definir una interfaz Observador (con el método de notificación) para que Libro dependa de esa interfaz y no de la clase 
// Estadisticas concreta — así se pueden agregar otros observadores (alertas, panel de bibliotecario, etc.) sin modificar Libro.

interface Observador {
    notificar(libro: Libro): void
}

class Estadisticas implements Observador {

    notificar(libro: Libro): void {
        console.log(`Estadísticas notificado: ${libro.titulo} cambió su disponibilidad a ${libro.disponible}`)
    }
}

class Libro {

    observadores: Observador[] = []

    constructor(public titulo: string, public autor: string, public disponible: boolean) {}

    agregarObservador(obs: Observador): void {
        this.observadores.push(obs)
    }

    notificarObservadores(): void {
        this.observadores.forEach(obs => {
            obs.notificar(this)
        });
    }

    cambiarDisponibilidad(estadoNuevo: boolean): void {
        this.disponible = estadoNuevo
        this.notificarObservadores()
    }
}

const estadisticas = new Estadisticas();
const libro = new Libro("Rayuela", "Julio Cortázar", true);
libro.agregarObservador(estadisticas);
libro.cambiarDisponibilidad(false);
const libro2 = new Libro("Cielo muerto, sol negro", "Graham McNeil", false)
libro2.agregarObservador(estadisticas)
libro2.cambiarDisponibilidad(true)
// Estadisticas notificado: Rayuela cambió su disponibilidad a false.