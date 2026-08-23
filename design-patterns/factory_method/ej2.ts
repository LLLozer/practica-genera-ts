interface Vehiculo {
    describir(): string 
}

class Auto implements Vehiculo {
    private puertas: number

    constructor(puertas: number) {
        this.puertas = puertas
    }

    describir(): string {
        return `Auto con ${this.puertas} puertas`
    }
}

class Moto implements Vehiculo {
    private cilindrada: number

    constructor(cilindrada: number) {
        this.cilindrada = cilindrada
    }

    describir(): string {
        return `Moto de ${this.cilindrada}cc`
    }
}

class FabricaDeVehiculos {
    public crearVehiculo(tipo: string, puertasOMotor: number): Vehiculo {
        if (tipo === "auto") {
            return new Auto(puertasOMotor)
        }
        else if (tipo === "moto") {
            return new Moto(puertasOMotor)
        }
        else {
            throw new Error("El tipo debe ser auto o moto")
        }
    }
}

const fabrica = new FabricaDeVehiculos
const auto = fabrica.crearVehiculo("auto", 4)
const moto = fabrica.crearVehiculo("moto", 10)
console.log(auto, moto)
console.log(auto.describir())
console.log(moto.describir())