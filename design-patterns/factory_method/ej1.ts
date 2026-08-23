interface Notificacion {
    enviar(mensaje: string): string
}

class NotificacionEmail implements Notificacion {

    enviar(mensaje: string): string {
        return `Email enviado. Mensaje: ${mensaje}`
    }
}

class NotificacionSMS implements Notificacion {

    enviar(mensaje: string): string {
        return `SMS enviado. Mensaje: ${mensaje}`
    }
}

class FabricaDeNotificaciones {

    public crearNotificacion(tipo: string): Notificacion {
        if (tipo === "email") {
            return new NotificacionEmail
        }
        else if (tipo === "sms") {
            return new NotificacionSMS
        }
        else {
            throw new Error("El tipo debe ser sms o email")
        }
    }
}

const fabrica = new FabricaDeNotificaciones
console.log(fabrica.crearNotificacion("email").enviar("Esta es una notificación por mail"))
console.log(fabrica.crearNotificacion("sms").enviar("Esta es una notificación por sms"))
