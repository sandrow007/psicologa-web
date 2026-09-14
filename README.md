# Tu web, explicada para ti

Esta web es tuya y está pensada para que la puedas tocar sin miedo.
No hace falta saber programar: casi todo lo que querrás cambiar
está en **un solo archivo** (`js/config.js`) o son textos que se
editan como en un Word.

Para editarla usa **VS Code** (gratis): abre la carpeta, haz doble
clic en el archivo, cambia el texto, guarda con Ctrl+S y sube los
cambios con el icono de las ramitas (Commit → Push).

---

## 1. Mapa de la casa: qué es cada archivo

| Archivo | Qué contiene | ¿Lo tocarás? |
|---|---|---|
| `js/config.js` | **Tu nombre, teléfono, email, precios, pago y calendario.** | Sí, es el principal |
| `index.html` | Los textos de la página (servicios, formación, tarifas...) | Sí, para cambiar textos |
| `js/test.js` | Las preguntas y respuestas del test de orientación | Solo si quieres cambiar el test |
| `js/chatbot.js` | Lo que responde la asistente del chat | Solo si quieres cambiar respuestas |
| `js/bienvenida.js` | La pantalla de entrada ("Antes de entrar, respira") | Casi nunca |
| `js/contacto.js` | El formulario de contacto | No tocar |
| `css/estilos.css` | Colores y diseño (los colores están arriba, en `:root`) | Solo para cambiar colores |
| `privacidad.html` | Política de privacidad | Rellenar los [corchetes] una vez |
| `aviso-legal.html` | Aviso legal | Rellenar los [corchetes] una vez |
| `cookies.html` | Política de cookies | Rellenar la fecha una vez |
| `guia.html` | Guía larga sobre la web (para ti, no para visitantes) | No hace falta subirla |
| `favicon.svg` | El iconito de la pestaña del navegador | No |
| `robots.txt` | Instrucciones para Google | No |

---

## 2. Lo que querrás cambiar algún día (y dónde está)

### Cambiar tu nombre, teléfono o email
Abre `js/config.js`. Está todo arriba, con comentarios. Cambia lo
que hay entre comillas, guarda y sube. La web entera se actualiza
sola (menú, pie de página, botones de WhatsApp, contacto...).

### Cambiar los precios
En `js/config.js`, apartado `tarifas`. Cambia el precio y la nota
de cada una. Las tarjetas de la web se rellenan solas.

### Cambiar textos de la página (servicios, hero, formación...)
Abre `index.html` y busca el texto con Ctrl+F. Edítalo como en un
Word, con cuidado de no borrar las etiquetas `<...>` que lo rodean.
En la sección "Mi formación" hay textos entre [corchetes] para
rellenar con tu universidad y especializaciones.

### Cambiar las preguntas del test
En `js/test.js`, al principio, está la lista `preguntas`. Cada
pregunta tiene 4 opciones con un valor de 0 a 3 (0 = todo bien,
3 = señal de alerta). Los textos de los resultados están en la
función `mostrarResultado`, más abajo.

### Cambiar lo que responde el chat
En `js/chatbot.js`. Cada respuesta es un texto entre comillas.
Las "excusas" de cuando no hay cita están en la lista `excusas`.
Importante: el chat está pensado para NO dar consejos psicológicos
— si le escriben algo personal, deriva a pedir cita. Déjalo así.

### Cambiar la pantalla de entrada
En `js/bienvenida.js`:
- `RECORDAR_ENTRADA = true` → la pantalla sale solo la primera vez.
- `RECORDAR_ENTRADA = false` → sale en TODAS las visitas.
El texto de la tarjeta está en `index.html` (busca "Antes de entrar").

### Cambiar los colores
En `css/estilos.css`, arriba del todo, en `:root`. Cada color tiene
su nombre. Cambia el código de color (por ejemplo `#a8d8e8`) y toda
la web cambia a la vez.

### Las reservas de cita (100% locales, sin nada externo)
La web muestra un calendario semanal con los huecos libres. La
visitante pulsa un hueco, se rellena el formulario, y al enviar se
abre su programa de correo con la solicitud ya escrita. No hay
calendarios externos, ni cuentas, ni servidores.

### Gestionar la agenda (MODO GESTIÓN — solo Ángela)
1. Abre la web y pulsa **Ctrl+Shift+A** en cualquier momento.
2. Escribe tu usuario y tu contraseña (las que te dio Sandro).
   En el código NO están escritas: solo se guarda su hash
   SHA-256, que no se puede revertir ni con F12.
3. Verás el calendario en modo gestión: puedes **navegar todo
   el año** (las visitantes solo ven 3 semanas) y **pulsar
   cualquier hueco para bloquearlo o liberarlo**. Los bloqueados
   salen tachados para las visitantes.
4. Cuando tengas la semana a tu gusto, pulsa **"Copiar
   configuración"**. Eso copia el bloque `agenda` actualizado.
5. Pégalo en `js/config.js` sustituyendo el bloque `agenda` viejo
   (puedes hacerlo desde el propio GitHub: entra al archivo,
   lápiz de editar, pegar, guardar). En 1-2 minutos la web
   mostrará los cambios a todo el mundo.

Importante: hasta que hagas el paso 5, tus cambios solo existen
en tu navegador. Y cuando confirmes una cita por email, entra al
modo gestión y bloquea ese hueco para que nadie más lo pida.
Los horarios generales (qué días y a qué horas trabajas) se
cambian en `js/config.js`, apartado `agenda → horarios`.

Para cambiar el usuario o la contraseña del modo gestión: pide a
quien te montó la web que genere un hash nuevo (es un cálculo de
un segundo) y sustituye el valor de `adminHash` en `js/config.js`.

### El pago: Bizum con garantía de reserva
El único método de pago es **Bizum**, directo a tu número (ya
configurado en `js/config.js`, campo `bizumNumero`). La web no
procesa pagos de ningún tipo: el dinero va de banco a banco.

Cómo funciona:
1. La persona pide cita desde el calendario online (las citas
   SOLO se piden ahí: ni por llamada ni por WhatsApp).
2. Tú confirmas por email y le pides la **garantía de 5€** por
   Bizum (importe en `garantiaImporte`).
3. Esos 5€ **se descuentan del precio de la sesión**. Si avisa
   con 24 h, se devuelven o se mueven a otra fecha. Si no acude
   sin avisar, no se devuelven. Todo está escrito en el aviso
   legal, sección "Reservas, garantía y cancelaciones".

### Sesiones online: Jitsi Meet
Las videoconsultas se hacen por **Jitsi Meet** (https://meet.jit.si/):
gratis, cifrado, sin cuentas y sin instalar nada (funciona en Mac,
Windows, móvil y tablet, solo navegador).
1. Entra en meet.jit.si y crea una sala con un nombre largo y
   difícil de adivinar (ej.: `angela-consulta-7x4k9`).
2. Pega el enlace completo en `js/config.js`, campo
   `enlaceVideollamada`. NO aparece en la web: es tu chuleta.
3. Al confirmar una cita online, envía ese enlace por email.
Nunca grabes una sesión sin el consentimiento expreso de la
persona (está en la política de privacidad).

### Tu dominio: psicoangela.com
El dominio ya está comprado y la web ya lo lleva puesto en todas
partes (canonical, sitemap, robots). Para conectarlo:

**Opción A — GitHub Pages (lo más simple):**
1. Repo → Settings → Pages → Custom domain: escribe `psicoangela.com`
2. En Namecheap (o donde esté el dominio), apunta los DNS a GitHub:
   - Registro A → 185.199.108.153, .109.153, .110.153, .111.153
   - Registro CNAME → www → tu-usuario.github.io
3. Marca “Enforce HTTPS” cuando GitHub lo active.

**Opción B — Cloudflare (más rápida y con HTTPS gratis):**
1. Crea cuenta en cloudflare.com (gratis) y añade psicoangela.com
2. Cloudflare te da 2 “nameservers”: pónlos en Namecheap
   (Domain List → Manage → Nameservers → Custom DNS)
3. En Cloudflare → Workers & Pages → sube esta carpeta, o con
   terminal: `npx wrangler login` y `npx wrangler pages deploy .`
4. La web se sirve desde Cloudflare, gratis y rapidísima.

---

## 3. Lo legal (hazlo una vez y olvídate)

- Rellena todos los `[corchetes]` de `privacidad.html` y
  `aviso-legal.html`: nombre, NIF, nº de colegiada, dirección, fecha.
  **Es obligatorio.**
- Tu número de colegiada ya sale en el pie de todas las páginas
  (se pone en `js/config.js`).

---

## 4. Cómo funciona la privacidad (no la rompas sin querer)

- El formulario **no envía nada a ningún servidor**: abre el
  programa de correo de la visitante con el mensaje ya escrito.
  El email va directo de su correo al tuyo.
- El test y el chat funcionan enteros en el navegador de la
  visitante. Nada sale de su dispositivo.
- No hay cookies, ni Google Analytics, ni base de datos.
- **Ojo**: si algún día añades Google Analytics, un mapa de Google
  o vídeos de YouTube incrustados, habrá que actualizar
  `privacidad.html` y `cookies.html` y avisar de ello.

---

## 5. Si algo se rompe

1. No entres en pánico: en GitHub siempre queda la versión anterior.
2. Abre la web, pulsa F12 → pestaña "Console". Si hay errores en
   rojo, suelen decir qué archivo falla.
3. Lo más común: un texto editado que rompió una etiqueta `<...>`
   o una comilla en `config.js`. Revisa tu último cambio.
4. Si no lo ves, deshaz el último cambio (Ctrl+Z), guarda y sube.
