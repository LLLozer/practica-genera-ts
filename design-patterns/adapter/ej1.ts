// Ejercicio 4: Adaptador para Cambiar la Interfaz de Inventarios Viejos

// Objetivo: Implementar el patrón Adaptador para integrar una clase antigua de inventario con el nuevo sistema.

// Crear una clase InventarioViejo que tenga un método agregarItem.
// Definir explícitamente la interfaz Inventario (el contrato objetivo, con agregarEquipo y listarEquipos) que espera el sistema nuevo.
// Implementar una clase AdaptadorInventario que implemente esa interfaz y permita utilizar InventarioViejo (con su método agregarItem) 
// donde el sistema nuevo espera un Inventario, traduciendo las llamadas internamente.

interface Equipo {
    nombre: string
    tipo: string
    estado: string
}

class InventarioViejo {
    equipos: Equipo[] = []

    agregarItem(nuevoItem: Equipo): void {
        this.equipos.push(nuevoItem)
    }
}

interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void

    listarEquipos(): Equipo[]
}

class AdaptadorInventario implements Inventario {

    inventario: InventarioViejo

    constructor(inventario: InventarioViejo) {
        this.inventario = inventario
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const nuevoItem: Equipo = { nombre, tipo, estado}
        this.inventario.agregarItem(nuevoItem)
    }

    listarEquipos(): Equipo[] {
        return this.inventario.equipos
    }
}


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]