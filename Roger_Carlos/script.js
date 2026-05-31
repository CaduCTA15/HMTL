let tamanhoFonte = 16;
let negrito = false;
let italico = false;

function salvarTexto() {
    const texto = document.getElementById("texto").value;

    document.getElementById("resultado").innerText = texto;
}

function aumentarFonte() {
    tamanhoFonte++;

    document.getElementById("resultado").style.fontSize =
        tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte--;

    if (tamanhoFonte < 8) {
        tamanhoFonte = 8;
    }

    document.getElementById("resultado").style.fontSize =
        tamanhoFonte + "px";
}

function alternarNegrito() {
    negrito = !negrito;

    document.getElementById("resultado").style.fontWeight =
        negrito ? "bold" : "normal";
}

function alternarItalico() {
    italico = !italico;

    document.getElementById("resultado").style.fontStyle =
        italico ? "italic" : "normal";
}