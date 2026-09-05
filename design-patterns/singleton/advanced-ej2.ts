// Ejercicios sobre Sistema de Gestión de Biblioteca en TypeScript
// Ejercicio 1: Implementar Patrón Singleton para el Catálogo

// Objetivo: Implementar un patrón Singleton para gestionar el catálogo de una biblioteca.

// Crear una clase Catalogo que siga el patrón Singleton.
// Esta clase debe permitir registrar libros con las propiedades titulo, autor y disponible (booleano).
// Agregar un método agregarLibro para añadir libros y un método listarLibros para devolver la lista completa de libros registrados.
// Definir un tipo o interfaz Libro (titulo, autor, disponible) para tipar los libros registrados.

interface Libro {
    titulo: string
    autor: string
    disponible: boolean
}

class Catalogo {
    libros: Libro[] = []

    private static instancia: Catalogo

    private constructor() {}
    
    static obtenerInstancia(): Catalogo {
        if (!Catalogo.instancia) {
            this.instancia = new Catalogo()
        }
        return Catalogo.instancia
    }

    agregarLibro(titulo: string, autor: string, disponible: boolean): void {
        const libro: Libro = { titulo, autor, disponible }
        this.libros.push(libro)
    }

    listarLibros(): Libro[] {
        return this.libros
    }
}

const catalogo = Catalogo.obtenerInstancia();
catalogo.agregarLibro("Rayuela", "Julio Cortázar", true);
catalogo.agregarLibro("Dune", "Frank Herbert", true)
console.log(catalogo.listarLibros());
// [{ titulo: "Rayuela", autor: "Julio Cortázar", disponible: true }]

const catalogo2 = Catalogo.obtenerInstancia()

console.log(catalogo === catalogo2)