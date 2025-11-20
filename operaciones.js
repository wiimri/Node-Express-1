const fs = require("fs");

function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf8");

    console.log("✅ Cita registrada correctamente:");
    console.log(nuevaCita);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

    console.log("📋 Listado de citas registradas:");
    console.log(citas);
}

module.exports = { registrar, leer };
