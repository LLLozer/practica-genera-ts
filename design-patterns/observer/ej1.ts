interface ObservadorClima {
    actualizar(temperatura: number): void 
}

class PanelDeTemperatura implements ObservadorClima {
    private nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    actualizar(temperatura: number): void {
        console.log(`${this.nombre}: nueva temperatura ${temperatura}°C`)
    }
}

class EstacionMeteorologica {
    private observadores: ObservadorClima[] = []
    private temperatura: number = 0

    agregarObservador(observador: ObservadorClima): void {
    this.observadores.push(observador)
    }

    eliminarObservador(observador: ObservadorClima): void {
        this.observadores = this.observadores.filter(obs => obs !== observador)
    }

    notificarObservadores(): void {
        this.observadores.forEach(obs => {
            obs.actualizar(this.temperatura)
        });
    }

    actualizarTemperatura(nuevaTemperatura: number): void {
        this.temperatura = nuevaTemperatura
        this.notificarObservadores()
    }
}

const estacion = new EstacionMeteorologica()
const panelSala = new PanelDeTemperatura("Deimos")
const panelCocina = new PanelDeTemperatura("Phobos")
estacion.agregarObservador(panelSala)
estacion.agregarObservador(panelCocina)
estacion.actualizarTemperatura(25)

