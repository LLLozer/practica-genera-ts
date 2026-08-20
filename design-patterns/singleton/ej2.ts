class RegistradorDeEventos {
    private static instance: RegistradorDeEventos
    private logs: string[] = []

    private constructor () {}

    static obtenerInstancia(): RegistradorDeEventos {
        if (!RegistradorDeEventos.instance) {
            RegistradorDeEventos.instance = new RegistradorDeEventos
        }
        return RegistradorDeEventos.instance
    }

    public agregarMensaje(mensaje: string): void {
        this.logs.push(mensaje)
    }

    public obtenerLogs(): string[] {
        return this.logs
    }

    public verCantidad(): number {
        return this.logs.length
    }
}

const logger1 = RegistradorDeEventos.obtenerInstancia()

logger1.agregarMensaje("Hei god morgen")
logger1.agregarMensaje("Hei god kveld")

const logger2 = RegistradorDeEventos.obtenerInstancia()
console.log(logger2.verCantidad())
console.log(logger2.obtenerLogs())

