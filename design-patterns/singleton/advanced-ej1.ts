// Ejercicios sobre Sistema de Gestión de Flota de Vehículos en TypeScript
// Ejercicio 1: Implementar Patrón Singleton para la Flota

// Objetivo: Implementar un patrón Singleton para gestionar una flota de vehículos.

// Crear una clase GestorDeFlota que siga el patrón Singleton.
// Esta clase debe permitir registrar vehículos con las propiedades patente, modelo y estado (Ej.: "en ruta", "en taller").
// Agregar un método agregarVehiculo para añadir vehículos y un método listarVehiculos para devolver la lista completa de vehículos registrados.
// Definir un tipo o interfaz Vehiculo(patente, modelo, estado) para tipar los vehículos registrados.

interface Vehiculo {
    patente: string
    modelo: string
    estado: string
}

class GestorDeFlota {
    private static instancia: GestorDeFlota
    vehiculos: Vehiculo[] = []

    constructor() {}
    
    static obtenerInstancia(): GestorDeFlota {
        if (!GestorDeFlota.instancia) {
            this.instancia = new GestorDeFlota()
        }
        return GestorDeFlota.instancia
    }

    agregarVehiculo(patente: string, modelo: string, estado: string): void {
        const nuevoVehiculo: Vehiculo = { patente, modelo, estado }
        this.vehiculos.push(nuevoVehiculo)
    }

    listarVehiculos(): Vehiculo[] {
        return this.vehiculos
    }
}

const flota = GestorDeFlota.obtenerInstancia();
flota.agregarVehiculo("AB123CD", "Ford Transit", "en ruta");
console.log(flota.listarVehiculos());
// [{ patente: "AB123CD", modelo: "Ford Transit", estado: "en ruta" }]