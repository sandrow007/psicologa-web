/* ============================================================
   CONFIGURACIÓN DE LA WEB — ¡TOCA SOLO ESTE ARCHIVO!
   ------------------------------------------------------------
   Aquí se cambian los datos importantes sin tener que buscar
   por todo el código: nombre, teléfono, email, precios, pago...
   Los textos largos se editan directamente en index.html.
   ============================================================ */

const CONFIG = {

    /* --- Datos de la psicóloga --- */
    nombre:      "Ángela M. M",      // Nombre que aparece en la web
    numColegiada: "[Nº de colegiada]",           // Obligatorio mostrarlo en el aviso legal
    email:       "contacto@tudominio.es",  // TODO: poner el email real de Ángela (ej.: hola@psicoangela.com)
    telefono:    "+34638372596",                 // Teléfono (formato internacional, sin espacios)
    telefonoBonito: "+34 638 37 25 96",           // Teléfono como se muestra en pantalla
    ciudad:      "Sevilla",

    /* --- Reservas: 100% LOCAL, sin servicios externos ---
       La cita se pide con un formulario de la propia web que
       genera un correo en el dispositivo de la visitante.
       No hay calendarios externos ni nada que salga a internet. */

    /* --- AGENDA SEMANAL ---
       horarios: día de la semana → [hora inicio, hora fin].
       1=lunes ... 6=sábado, 0=domingo (null = cerrado).
       bloqueos: huecos ocupados, formato "AAAA-MM-DDTHH:MM".
       vacaciones: días completos cerrados, formato "AAAA-MM-DD".
       ¡No edites los bloqueos a mano! Ángela los gestiona con el
       modo gestión (ver adminPin abajo) y pega aquí el resultado. */
    agenda: {
        duracionMin: 60,
        horarios: { "1": [9, 20], "2": [9, 20], "3": [9, 20], "4": [9, 20], "5": [9, 20], "6": [10, 14], "0": null },
        bloqueos: [],
        vacaciones: []
    },

    /* --- VIDEOCONSULTA (Jitsi Meet) ---
       La plataforma oficial de las sesiones online es Jitsi Meet
       (https://meet.jit.si/): gratis, cifrada, de código abierto y
       sin cuentas ni instalaciones para la persona paciente.
       CÓMO SE USA: entra en meet.jit.si, escribe un nombre de sala
       largo y difícil de adivinar (por ejemplo: angela-consulta-7x4k9)
       y pega aquí el enlace completo. NO se muestra en la web: es para
       que lo tengas a mano y lo envíes tú por email o WhatsApp al
       confirmar cada cita online. Puedes usar la misma sala siempre
       (con contraseña de sala) o crear una nueva por sesión. */
    enlaceVideollamada: "",

    /* --- MODALIDAD PRESENCIAL ---
       false = los visitantes solo pueden pedir sesión ONLINE.
       true  = pueden elegir presencial u online.
       Ángela puede cambiarlo desde su área privada (Ajustes). */
    presencialActivo: false,

    /* --- DATOS FISCALES (para las facturas) ---
       Solo se usan al generar facturas desde el área privada.
       No se muestran en la parte pública de la web. */
    fiscal: {
        nombre:    "Ángela M. M",   // Nombre completo fiscal
        nif:       "[NIF]",          // Obligatorio en facturas
        direccion: "[dirección fiscal, ciudad, CP]"
    },

    /* --- GARANTÍA DE RESERVA ---
       Para confirmar la cita se pide esta garantía por Bizum.
       Se descuenta del precio de la sesión. Si la persona no
       acude sin avisar con 24 h, no se devuelve. */
    garantiaImporte: "5€",

    /* --- MODO GESTIÓN (solo para Ángela) ---
       En la web, pulsa Ctrl+Shift+A e introduce usuario y
       contraseña. Aquí NO están escritas: solo se guarda el
       hash SHA-256 de ambas, imposible de revertir con F12.
       Para cambiar las credenciales, genera un hash nuevo
       (instrucciones en el README, apartado "modo gestión"). */
    adminHash: "e76b9f2dbc5c679be56f990361d9baaf6a7ca97126950370bc0044e1cfdcee94",
    /* --- PAGO: BIZUM ---
       El único método de pago es Bizum, directo a tu número.
       La web no procesa pagos: solo muestra este número para la
       garantía de reserva (5€) y el resto se abona tras la sesión. */
    bizumNumero: "638 37 25 96",

    /* --- FORMULARIO DE CONTACTO ---
       Por defecto: mailto (privacidad total, nada pasa por servidores).
       Alternativa Formspree (https://formspree.io, gratis hasta 50
       envíos/mes): crea un formulario, copia tu ID y pégalo abajo.
       OJO: con Formspree los mensajes pasan por sus servidores y hay
       que mencionarlo en privacidad.html. Con mailto no hace falta. */
    formspreeId: "",

    /* --- Tarifas (cámbialas aquí y se actualizan solas) --- */
    tarifas: {
        individual: { precio: "60€",  nota: "Por sesión de 60 minutos" },
        online:     { precio: "60€",  nota: "Por sesión de 60 minutos, desde donde tú quieras" },
        mensual:    { precio: "220€", nota: "4 sesiones al mes (te ahorras 20€)" },
        pareja:     { precio: "80€",  nota: "Por sesión de 60 minutos" }
    }
};

/* No toques esto: rellena la web con los datos de arriba. */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-cfg]").forEach(el => {
        const clave = el.dataset.cfg;
        if (CONFIG[clave] !== undefined) el.textContent = CONFIG[clave];
    });
    document.querySelectorAll("[data-cfg-href]").forEach(el => {
        const clave = el.dataset.cfgHref;
        if (clave === "email")        el.href = "mailto:" + CONFIG.email;
        if (clave === "telefono")     el.href = "tel:" + CONFIG.telefono;
        if (clave === "whatsapp")     el.href = "https://wa.me/" + CONFIG.telefono.replace("+", "");
    });
    /* Año del footer siempre actualizado */
    const anio = document.getElementById("anioFooter");
    if (anio) anio.textContent = new Date().getFullYear();
});
