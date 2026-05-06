function calcular() {
    const cuenta = parseFloat(document.getElementById("cuenta").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    const personas = parseFloat(document.getElementById("personas").value);

    if (isNaN(cuenta) || cuenta <= 0) {
        alert("Por favor ingrese un total válido");
        return;
    }

    if (isNaN(porcentaje) || porcentaje < 0) {
        alert("Por favor ingrese un porcentaje válido");
        return;
    }

    if (isNaN(personas) || personas < 1) {
        alert("Por favor ingrese un número válido de personas");
        return;
    }

    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;
    const porPersona = total / personas;

    document.getElementById("propina").textContent = "Q " + propina.toFixed(2);
    document.getElementById("total").textContent = "Q " + total.toFixed(2);
    document.getElementById("porPersona").textContent = "Q " + porPersona.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}