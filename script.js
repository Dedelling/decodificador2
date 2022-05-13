const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar () {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0]))   {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i][0], matrizCodigo [i][1]);
        }     
    }
    return stringEncriptada;
}

function btnDesencriptar () {
    const textoDesEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesEncriptado;
    mensagem.style.backgroundImage = "none";
}
 
function desencriptar(stringDesEncriptada) {
    let matrizCodigoDes = [["aimes", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigoDes.length; i++) {
        if (stringDesEncriptada.includes(matrizCodigoDes[i][0]))   {
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigoDes [i][0], matrizCodigoDes [i][1]);
        }     
    }
    return stringDesEncriptada;
}

function btnCopiar () {
    const textoCopiado = copiar(mensagem.value);
    inputTexto.value = textoCopiado;
    mensagem.style.backgroundImage = "none";
}

function copiar(stringCopiado) {
    return stringCopiado;
}