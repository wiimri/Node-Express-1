# 🐾 Veterinaria JS — Registro de Citas con Node.js

Este proyecto corresponde al desafío **“Veterinaria JS”** del Bootcamp de **Desafío Latam**, cuyo objetivo es construir una aplicación backend básica utilizando **Node.js**, **File System**, modularización y **argumentos por línea de comando**.

El sistema permite:
- Registrar citas veterinarias.
- Guardarlas en un archivo JSON.
- Leer y visualizar todas las citas almacenadas.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **CommonJS Modules (require / module.exports)**
- **Módulo File System (fs)**
- **JSON como medio de persistencia**

---

## 📂 Estructura del proyecto

📁 veterinaria-js
├── index.js # Archivo principal ejecutado por la terminal
├── operaciones.js # Funciones registrar() y leer()
└── citas.json # Base de datos local (JSON)

---

## ⚙️ Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/veterinaria-js.git
```
2. Entra a la carpeta 
- cd veterinaria-js
3. No requiere instalaciones adicionales.

🧠 ¿Cómo funciona?

Este proyecto utiliza los argumentos enviados desde la terminal mediante:
process.argv.slice(2)

El primer argumento define la operación (registrar o leer), y los siguientes contienen los datos de la cita.

📝 Funcionalidades
1️⃣ Registrar una nueva cita
node index.js registrar Benito "2 años" perro blanco vomitos

Esto:

Lee las citas existentes desde citas.json

Agrega una nueva entrada

Vuelve a escribir el archivo usando fs.writeFileSync

Devuelve un mensaje de confirmación

Ejemplo de cita guardada:

{
  "nombre": "Benito",
  "edad": "2 años",
  "animal": "perro",
  "color": "blanco",
  "enfermedad": "vomitos"
}

2️⃣ Leer todas las citas registradas
node index.js leer

Salida ejemplo:
📋 Listado de citas registradas:
```json
[
  {
    "nombre": "Benito",
    "edad": "2 años",
    "animal": "perro",
    "color": "blanco",
    "enfermedad": "vomitos"
  }
]
```

📚 Archivos del proyecto
🔹 index.js

Recibe argumentos desde terminal

Llama a registrar() o leer()

🔹 operaciones.js

Incluye:

function registrar(nombre, edad, animal, color, enfermedad) { ... }
function leer() { ... }
module.exports = { registrar, leer }

Usa fs.readFileSync() y fs.writeFileSync() para persistencia.

🔹 citas.json

Archivo JSON que almacena:
[]

🏁 Objetivos evaluados cumplidos

✔ Ejecutar scripts con Node.js
✔ Crear archivos con File System
✔ Leer archivos con File System
✔ Importar y exportar módulos
✔ Utilizar argumentos por línea de comando

Proyecto académico — libre para estudio y mejora.

✨ Autor

Williams Esteban Arias Quilodrán
Desafío Latam


