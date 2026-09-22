# 🛡️ Quiz: Calidad de Software y Familia ISO/IEC 33000 (Chazin Food)

Aplicación web interactiva, moderna y didáctica diseñada para evaluar y reforzar los conceptos fundamentales de la presentación de **Calidad de Software: Familia ISO/IEC 33000, evolución de ISO/IEC 15504 (SPICE) y aplicación al proyecto Chazin Food**.

- **Competencia:** Negociación
- **Instructor:** Jairo Augusto Arboleda Londoño
- **Aprendices del Proyecto:** Samuel Gutiérrez Franco, Henry Jafet Caballero Mendoza, Juan José Gallego Bran, Emanuel Henao González, Alexis Gómez Pavas
- **Institución:** Centro de Servicios y Gestión Empresarial — SENA

---

## 🚀 Características Principales

1. **Preguntas Didácticas y Rigurosas (10 Preguntas)**
   - Extraídas directamente de las diapositivas de `CALIDAD-DE-SOFTWARE.pdf`.
   - Cobertura de antecedentes SPICE (ISO/IEC 15504), marco actual ISO/IEC 33000 (33001, 33002, 33004, 33020, TS 33061), escala de capacidad (0 a 5), y evaluación real de Chazin Food (Ingeniería, Soporte y Gestión con React, Flutter, MySQL y Git).
   - Retroalimentación explicativa inmediata con justificación pedagógica en cada respuesta.
   - Puntuación dinámica: 100 puntos base + bonificación por rapidez + multiplicador de racha (combo).

2. **Sistema de Ranking en Tiempo Real con Protección de Administrador 🔒**
   - Registro de jugador con nombre/apodo y selección de avatar temático (`🛡️`, `📋`, `📊`, `🚀`, `🏆`, `⚡`).
   - Persistencia local en el navegador (`localStorage`) y sincronización en la nube (Gist/API).
   - Podio visual con medallas de Oro 🥇, Plata 🥈 y Bronce 🥉, y lista de posiciones con tiempo y aciertos.
   - **🔐 Validación Exclusiva de Administrador para Reinicio de Puntos:**
     - El botón **🔒 Reiniciar** despliega un modal de seguridad que solicita la **clave maestra de administrador**.
     - **Clave por defecto:** `sena2026`.
     - Ningún usuario o compañero podrá borrar los puntajes sin ingresar la clave correcta.
     - Protección tanto en la interfaz como en el backend (`/api/scores` DELETE).

3. **Compartir en WhatsApp y Modo Desafío (Viral Challenge)**
   - **Botón directo de WhatsApp:** Genera un mensaje formateado con emojis, puntaje, aciertos, tiempo y enlace de reto.
   - **Enlace de Reto Directo:** Al compartir el link generado (`?retador=TuNombre&score=1450&avatar=🛡️`), quien lo abra verá un banner de duelo:
     > *"⚔️ ¡[Nombre] te ha retado a superar su puntaje de [Puntaje] pts!"*
   - Al finalizar la partida, se despliega una tarjeta de duelo cara a cara (*Head-to-Head*) comparando ambos puntajes y declarando al ganador.

4. **Diseño Visual de Primer Nivel**
   - Estilo *Glassmorphism* oscuro con acentos zafiro/cian neón (`#0ea5e9`) y esmeralda (`#10b981`).
   - Efectos de confeti de celebración en pantalla final.
   - Efectos de sonido sintetizados mediante la **Web Audio API** (sin depender de archivos de audio externos) con botón para silenciar.
   - Modal interactivo para revisar todas las respuestas y explicaciones tras completar el quiz.
   - 100% responsivo y optimizado para teléfonos celulares (ideal para abrir desde el enlace de WhatsApp).

---

## 🔑 Cómo Cambiar la Clave de Administrador

Para personalizar la contraseña maestra de reinicio:
1. Abre `app.js` y modifica la constante en la línea 9:
   ```javascript
   const ADMIN_MASTER_KEY = 'tu_nueva_clave_aqui';
   ```
2. Si utilizas el backend en la nube (`api/scores.js`), puedes configurar la variable de entorno `ADMIN_KEY` en tu panel de Vercel/Netlify o cambiar el fallback en la línea 93 de `api/scores.js`:
   ```javascript
   const ADMIN_SECRET = process.env.ADMIN_KEY || 'tu_nueva_clave_aqui';
   ```

---

## 🛠️ Cómo Ejecutar Localmente

### Opción 1: Abrir directamente el archivo
Haz doble clic en el archivo `index.html` en el explorador de archivos para abrirlo en Chrome, Edge o cualquier navegador.

### Opción 2: Usar un servidor local de Python
Abre una terminal o consola en esta carpeta y ejecuta:
```bash
python -m http.server 8080
```
Luego abre tu navegador en `http://localhost:8080`.

### Opción 3: Servidor con Node.js
```bash
npx serve .
```

---

## 🌐 Cómo Publicarlo en Internet Gratis (Para compartir por WhatsApp)

### 1. GitHub Pages (Recomendado)
1. Sube los archivos (`index.html`, `styles.css`, `app.js`, `README.md`) a un repositorio en GitHub.
2. Ve a **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Guarda y en 1 minuto tendrás un enlace público como:
   `https://tu-usuario.github.io/tu-repo/`

### 2. Vercel o Netlify (Sincronización en la Nube Completa)
1. Entra a [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com).
2. Arrastra y suelta la carpeta `quizzis`.
3. Te generará al instante un enlace seguro `https://...` listo para enviar por WhatsApp.

---

## 📁 Estructura del Proyecto

```
quizzis/
├── index.html                     # Estructura semántica, vistas, modal de revisión y modal de admin
├── styles.css                     # Estilos modernos, animaciones, glassmorphism y modal de seguridad
├── app.js                         # Lógica del juego, banco de 10 preguntas ISO 33000, audio y ranking protegido
├── api/
│   └── scores.js                  # Endpoint serverless con validación de clave de administrador
├── CALIDAD-DE-SOFTWARE.pdf        # Documento oficial de referencia
└── README.md                      # Guía de uso, seguridad y despliegue
```
