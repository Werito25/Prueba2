function encriptar() {
    let text = document.getElementById("inputText").value;

    if (!validarTexto(text)) {
        mostrarAdvertencia("Solo se permiten letras minúsculas sin acentos.");
        return;
    }

    let encryptedText = text.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    mostrarResultado(encryptedText);
    document.getElementById("instructionText").style.display = "none";
    limpiarEntrada();
}

function desencriptar() {
    let text = document.getElementById("inputText").value;

    if (!validarTexto(text)) {
        mostrarAdvertencia("Solo se permiten letras minúsculas sin acentos.");
        return;
    }

    let decryptedText = text.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        switch (match) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
    });

    mostrarResultado(decryptedText);
    document.getElementById("instructionText").style.display = "none";
    limpiarEntrada();
}

function validarTexto(text) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

function mostrarAdvertencia(mensaje) {
    const warningElement = document.getElementById("warning");
    warningElement.textContent = mensaje;
    warningElement.style.display = "block";
    setTimeout(() => {
        warningElement.style.display = "none";
    }, 3000); // Oculta el mensaje después de 3 segundos
}

function limpiarEntrada() {
    document.getElementById("inputText").value = "";
}

function mostrarResultado(resultado) {
    // Oculta la imagen y muestra el resultado
    document.getElementById("placeholderImage").style.display = "none";
    document.getElementById("outputText").style.display = "block";
    document.getElementById("copyButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block"; 
    document.getElementById("outputText").value = resultado;
}

function copiarTexto() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function resetear() {
    // Limpiar el campo de texto de entrada
    document.getElementById("inputText").value = "";

    // Restaurar el estado inicial ocultando la imagen de resultado vacío y mostrando el texto predeterminado
    document.getElementById("placeholderImage").style.display = "block";
    document.getElementById("outputText").style.display = "none";
    document.getElementById("copyButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none"; // Ocultar el botón Resetear
    document.getElementById("instructionText").style.display = "block";

    // Restaurar cualquier mensaje de advertencia
    document.getElementById("warning").style.display = "none";
}