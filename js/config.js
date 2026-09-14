/* ============================================================
   CONFIGURACIÓN DE LA WEB — ¡TOCA SOLO ESTE ARCHIVO!
   ------------------------------------------------------------
   Aquí se cambian los datos importantes sin tener que buscar
   por todo el código: nombre, teléfono, email, precios, pago...
   Los textos largos se editan directamente en index.html.
   ============================================================ */

const CONFIG = {

    /* --- Datos de la psicóloga --- */
    nombre:      "Ángela Montero Muñoz",   // Nombre que aparece en la web
    numColegiada: "AN13061",               // COP Andalucía — obligatorio mostrarlo en el aviso legal
    email:       "angelamontero.psicologia@gmail.com",  // Aquí llegan las citas y mensajes
    telefono:    "+34638372596",                 // Teléfono (formato internacional, sin espacios)
    telefonoBonito: "+34 638 37 25 96",           // Teléfono como se muestra en pantalla
    ciudad:      "Sevilla",

    /* --- Reservas: 100% LOCAL, sin servicios externos ---
       La cita se pide con un formulario de la propia web que
       genera un correo en el dispositivo de la visitante.
       No hay calendarios externos ni nada que salga a internet. */

    /* --- AGENDA SEMANAL ---
       horarios: día de la semana → lista de franjas [hora inicio, hora fin].
       1=lunes ... 6=sábado, 0=domingo (null = cerrado).
       Ángela atiende de lunes a viernes de 9 a 14 y de 16 a 21.
       bloqueos: huecos ocupados, formato "AAAA-MM-DDTHH:MM".
       vacaciones: días completos cerrados, formato "AAAA-MM-DD".
       ¡No edites los bloqueos a mano! Ángela los gestiona con el
       modo gestión (ver adminHash abajo) y pega aquí el resultado. */
    agenda: {
        duracionMin: 60,
        horarios: {
            "1": [[9, 14], [16, 21]],
            "2": [[9, 14], [16, 21]],
            "3": [[9, 14], [16, 21]],
            "4": [[9, 14], [16, 21]],
            "5": [[9, 14], [16, 21]],
            "6": null,
            "0": null
        },
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
       (con contraseña de sala) o crear una nueva por sesión.
       PENDIENTE: Ángela aún no ha creado su sala. */
    enlaceVideollamada: "",

    /* --- MODALIDAD PRESENCIAL ---
       false = los visitantes solo pueden pedir sesión ONLINE.
       true  = pueden elegir presencial u online.
       Ángela puede cambiarlo desde su área privada (Ajustes).
       Ahora mismo está desactivado: aún no hay consulta física. */
    presencialActivo: false,

    /* --- DATOS FISCALES (para las facturas) ---
       Solo se usan al generar facturas desde el área privada.
       No se muestran en la parte pública de la web.
       PENDIENTE: Ángela debe confirmar su NIF y dirección fiscal. */
    fiscal: {
        nombre:    "Ángela Montero Muñoz",
        nif:       "[NIF]",          // Obligatorio en facturas
        direccion: "[dirección fiscal, ciudad, CP]"
    },

    /* --- GARANTÍA DE RESERVA ---
       Para confirmar la cita se pide esta garantía por Bizum.
       Se descuenta del precio de la sesión. Si la persona no
       acude sin avisar con 24 h, no se devuelve. */
    garantiaImporte: "10€",

    /* --- MODO GESTIÓN (solo para Ángela) ---
       En la web, pulsa Ctrl+Shift+A e introduce usuario y
       contraseña. Aquí NO están escritas: solo se guarda el
       hash SHA-256 de ambas, imposible de revertir con F12.
       Para cambiar las credenciales, genera un hash nuevo
       (instrucciones en el README, apartado "modo gestión"). */
    adminHash: "e76b9f2dbc5c679be56f990361d9baaf6a7ca97126950370bc0044e1cfdcee94",

    /* --- PAGO: BIZUM ---
       El único método de pago es Bizum, directo a tu número
       (confirmado por Ángela: el 638 37 25 96 es correcto).
       La web no procesa pagos: solo muestra este número para la
       garantía de reserva (10€) y el resto se abona tras la sesión. */
    bizumNumero: "638 37 25 96",

    /* --- FORMULARIO DE CONTACTO ---
       Por defecto: mailto (privacidad total, nada pasa por servidores).
       Alternativa Formspree (https://formspree.io, gratis hasta 50
       envíos/mes): crea un formulario, copia tu ID y pégalo abajo.
       OJO: con Formspree los mensajes pasan por sus servidores y hay
       que mencionarlo en privacidad.html. Con mailto no hace falta. */
    formspreeId: "",

    /* --- Tarifas (cámbialas aquí y se actualizan solas) ---
       Confirmadas por Ángela: 55€ individual, 55€ online,
       200€ bono mensual (4 sesiones), 80€ pareja. */
    tarifas: {
        individual: { precio: "55€",  nota: "Por sesión de 60 minutos" },
        online:     { precio: "55€",  nota: "Por sesión de 60 minutos, desde donde tú quieras" },
        mensual:    { precio: "200€", nota: "4 sesiones al mes (te ahorras 20€)" },
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
