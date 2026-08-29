// Ejercicio 2: Implementar Patrón Factory Method para Crear Vehículos

// Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de vehículos.

// Crear una clase VehiculoFactory con un método crearVehiculo que, basado en el tipo de vehículo ("Auto", "Camioneta", "Camion"), 
// devuelva una instancia de la clase adecuada.

// Crear clases específicas para cada tipo de vehículo (Auto, Camioneta, Camion), cada una con sus propias propiedades 
// (Ej.: cantidadAsientos, capacidadCarga).
// Estas clases deben extenderse de una clase abstracta común que declare el método detalles(), 
// para que crearVehiculo devuelva siempre un tipo uniforme sin importar el vehículo concreto que construya.

interface Vehiculo {
    detalles(): string
}

class Auto implements Vehiculo {
    modelo: string
    capacidadCarga: string

    constructor(modelo: string, capacidadCarga: string) {
        this.modelo = modelo
        this.capacidadCarga = capacidadCarga
    }

    detalles(): string {
        return `Auto, Modelo:${this.modelo}, Capacidad de carga:${this.capacidadCarga}`
    }
}

class Camioneta implements Vehiculo {
    modelo: string
    capacidadCarga: string

    constructor(modelo: string, capacidadCarga: string) {
        this.modelo = modelo
        this.capacidadCarga = capacidadCarga
    }

    detalles(): string {
        return `Camioneta, Modelo:${this.modelo}, Capacidad de carga:${this.capacidadCarga}`
    }
}

class Camion implements Vehiculo {
    modelo: string
    capacidadCarga: string

    constructor(modelo: string, capacidadCarga: string) {
        this.modelo = modelo
        this.capacidadCarga = capacidadCarga
    }

    detalles(): string {
        return `Camion, Modelo:${this.modelo}, Capacidad de carga:${this.capacidadCarga}`
    }
}

class VehiculoFactory {
    
    crearVehiculo(tipo: string, modelo: string, capacidadCarga: string): Vehiculo {
        switch (tipo) {
            case "Camion":
                return new Camion(modelo, capacidadCarga);
            case "Auto":
                return new Auto(modelo, capacidadCarga);
            case "Camioneta":
                return new Camioneta(modelo, capacidadCarga);
        } 
        throw new Error("El tipo no es válido")
    }
}

const factory = new VehiculoFactory();
const camion = factory.crearVehiculo("Camion", "Scania R450", "20000kg");
console.log(camion.detalles());
// Tipo: Camion, Modelo: Scania R450, Capacidad de carga: 20000kg