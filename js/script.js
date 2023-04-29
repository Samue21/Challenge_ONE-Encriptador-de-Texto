let textarea = document.getElementById("texto-input");
let divResultado = document.getElementById("div-resultado");

function clean() {
    textarea.value="";
}

function isVacio() {
    if(textarea.value == ""){
        textarea.value = "Ingrese el texto aqui"
    }
}

function validar() {
    let isVacio= true;
    if(textarea.value == "Ingrese el texto aqui"){
        isVacio = true;
    }else{
        isVacio = false;
    }

    return isVacio;
}

function encriptar(){
    let lengthTexto = textarea.value.trim();
    let textoEncriptado = "";

    if(validar()!=true){
        
        for (let i = 0; i < lengthTexto.length; i++) {
            if(lengthTexto[i] == 'a'){
                textoEncriptado += 'ai'
            } else if( lengthTexto[i] == "e" ){
                textoEncriptado += 'enter' 
            } else if( lengthTexto[i] == 'i' ){
                textoEncriptado += 'imes'
            } else if( lengthTexto[i] == 'o' ){
                textoEncriptado += 'ober'
            } else if( lengthTexto[i] == 'u' ){
                textoEncriptado += 'ufat' 
            }else{
                textoEncriptado += lengthTexto[i];
            }
            
        }
        divResultado.setAttribute('style', 'display:block; text-align: left; ')
        divResultado.innerHTML ="<p class='msj-resultado' id='msg-resultado'>"+ textoEncriptado +"</p> <center><input type='button'value='Copiar' class='boton copiar' onclick='copy()'></center>"
        let msjResultado = document.getElementById("msg-resultado");
        msjResultado.setAttribute('style', 'padding: 10px; word-wrap: break-word;')
    }else{
        alert("Ingresa un texto valido")
    }
}

function desencriptar(){
    let lengthTexto = textarea.value.trim();
    let textoDesencriptado = lengthTexto;

    if(validar()!=true){

        
        if(textoDesencriptado.includes('ai')){
            textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a')
        }
        if( textoDesencriptado.includes('enter') ){
            textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e')
        }
        if( textoDesencriptado.includes('imes') ){
            textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i')
        }
        if( textoDesencriptado.includes('ober') ){
            textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o')
        }
        if( textoDesencriptado.includes('ufat') ){
            textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u')
        }
      
        divResultado.setAttribute('style', 'display:block; text-align: left; ')
        divResultado.innerHTML ="<p class='msj-resultado' id='msg-resultado'>"+ textoDesencriptado +"</p>  <center><input type='button'value='Copiar' class='boton copiar' onclick='copy()'></center>"
        let msjResultado = document.getElementById("msg-resultado");
        msjResultado.setAttribute('style', 'padding: 10px;')

    }else{
        alert("Ingresa un texto valido")
    }
}

function copy() {
    let copyText = document.getElementById('msg-resultado')
    navigator.clipboard.writeText(copyText.textContent);
    alert('Texto copiado')
  }