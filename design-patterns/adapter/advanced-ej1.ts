// Ejercicio 4: Adaptador para Cambiar la Interfaz de Sistemas de Flota Viejos

// Objetivo: Implementar el patrón Adaptador para integrar un sistema antiguo de registro de flota con el nuevo sistema.

// Crear una clase RegistroDeFlotaViejo que tenga un método registrarUnidad.
// Definir explícitamente la interfaz GestorDeFlotaModerno (el contrato objetivo, con agregarVehiculo y listarVehiculos) que espera el sistema nuevo.
// Implementar una clase AdaptadorDeFlota que implemente esa interfaz y permita utilizar RegistroDeFlotaViejo (con su método registrarUnidad) 
// donde el sistema nuevo espera un GestorDeFlotaModerno, traduciendo las llamadas internamente.

interface Vehiculo {
    patente: string
    modelo: string
    estado: string
}

class RegistroDeFlotaViejo {

    unidades: Vehiculo[] = []

    registrarUnidad(unidad: Vehiculo): void {
        this.unidades.push(unidad)
    }
}

interface GestorDeFlotaModerno {

    agregarVehiculo(patente: string, modelo: string, estado: string): void

    listarVehiculos(): Vehiculo[]

}

class AdaptadorDeFlota implements GestorDeFlotaModerno {

    registro: RegistroDeFlotaViejo

    constructor(registro: RegistroDeFlotaViejo) {
        this.registro = registro
    }

    agregarVehiculo(patente: string, modelo: string, estado: string): void {
        const vehiculo = { patente, modelo, estado }
        this.registro.registrarUnidad(vehiculo)
    }

    listarVehiculos(): Vehiculo[] {
        return this.registro.unidades
    }

}


const registroViejo = new RegistroDeFlotaViejo();
const adaptador = new AdaptadorDeFlota(registroViejo);
adaptador.agregarVehiculo("XY789ZW", "Renault Kangoo", "disponible");
console.log(adaptador.listarVehiculos());
// [{ patente: "XY789ZW", modelo: "Renault Kangoo", estado: "disponible" }]