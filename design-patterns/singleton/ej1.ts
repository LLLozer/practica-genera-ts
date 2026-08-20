class GestorDeConfiguracion {
    private static instance: GestorDeConfiguracion;
    private features: { [clave: string]: string } = {}

    private constructor() {}

    static obtenerInstancia (): GestorDeConfiguracion {
        if (!GestorDeConfiguracion.instance) {
            GestorDeConfiguracion.instance = new GestorDeConfiguracion
        }
        return GestorDeConfiguracion.instance
    }

    public establecerConfiguracion(clave: string, valor: string): void {
        this.features[clave] = valor
    }

    public obtenerConfiguracion(clave: string): string | undefined {
        return this.features[clave]
    }
}

const config1 = GestorDeConfiguracion.obtenerInstancia()
config1.establecerConfiguracion("idioma", "norsk")

const config2 = GestorDeConfiguracion.obtenerInstancia()
console.log(config2.obtenerConfiguracion("idioma"))

console.log(config1 === config2)