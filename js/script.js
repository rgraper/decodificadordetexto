function criptografar() {
    let criptografa = document.querySelector(".input__texto").value;

    let resultadocript = criptografa
        .split('e').join('enter')
        .split('i').join('imes')
        .split('a').join('ai')
        .split('o').join('ober')
        .split('u').join('ufat');

    document.querySelector(".texto__transformado").value = resultadocript;
}

function descriptografar() {
    let descriptografa = document.querySelector(".input__texto").value;

    let resultadodescript = descriptografa
        .split('enter').join('e')
        .split('imes').join('i')
        .split('ai').join('a')
        .split('ober').join('o')
        .split('ufat').join('u');

    document.querySelector(".texto__transformado").value = resultadodescript;
}

function copiar() {
    let copiaTexto = document.querySelector(".texto__transformado");
    copiaTexto.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
  
