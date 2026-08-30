// Ejercicio 3: Implementar Patrón Observer para Seguimiento del Estado

// Objetivo: Utilizar el patrón Observer para notificar a un área de mantenimiento cuando un vehículo cambia de estado.

// Crear una clase Mantenimiento que actúe como observador y reciba notificaciones cuando el estado de un vehículo cambie.
// Implementar la clase Vehiculo que permita agregar observadores y notifique a los observadores cuando su estado cambie.

// Definir una interfaz Observador (con el método de notificación) para que Vehiculo dependa de esa interfaz 
// y no de la clase Mantenimiento concreta — así se pueden agregar otros observadores (dashboard, alertas, etc.) sin modificar Vehiculo.

interface Observador {
    notificar(estado: string, patente: string): void
}

class Mantenimiento implements Observador {

    notificar(estado: string, patente: string): void {
        console.log(`Mantenimiento notificado: ${patente} ha cambiado su estado a ${estado}`)
    }
}

class Vehiculo {

    observadores: Observador[] = []

    patente: string
    modelo: string
    estado: string

    constructor(patente: string, modelo: string, estado: string) {
        this.patente = patente
        this.modelo = modelo
        this.estado = estado
    }
    
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador)
    }

    notificarCambio(): void {
        this.observadores.forEach(obs => {
            obs.notificar(this.estado, this.patente)
        });
    }

    cambiarEstado(estado: string): void {
        this.estado = estado
        this.notificarCambio()
    }
}

const mantenimiento = new Mantenimiento();
const vehiculo = new Vehiculo("AB123CD", "Ford Transit", "en ruta");
vehiculo.agregarObservador(mantenimiento);
vehiculo.cambiarEstado("en taller");
// Mantenimiento notificado: AB123CD ha cambiado su estado a en taller.

const otroVehiculo = new Vehiculo("XY999ZZ", "Renault Kangoo", "disponible");
otroVehiculo.agregarObservador(mantenimiento); // el mismo Mantenimiento de antes
otroVehiculo.cambiarEstado("en taller");