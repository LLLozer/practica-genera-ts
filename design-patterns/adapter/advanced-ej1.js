"use strict";
// Ejercicio 4: Adaptador para Cambiar la Interfaz de Sistemas de Flota Viejos
class RegistroDeFlotaViejo {
    unidades = [];
    registrarUnidad(unidad) {
        this.unidades.push(unidad);
    }
}
class AdaptadorDeFlota {
    registro;
    constructor(registro) {
        this.registro = registro;
    }
    agregarVehiculo(patente, modelo, estado) {
        const vehiculo = { patente, modelo, estado };
        this.registro.registrarUnidad(vehiculo);
    }
    listarVehiculos() {
        return this.registro.unidades;
    }
}
const registroViejo = new RegistroDeFlotaViejo();
const adaptador = new AdaptadorDeFlota(registroViejo);
adaptador.agregarVehiculo("XY789ZW", "Renault Kangoo", "disponible");
console.log(adaptador.listarVehiculos());
// [{ patente: "XY789ZW", modelo: "Renault Kangoo", estado: "disponible" }]
