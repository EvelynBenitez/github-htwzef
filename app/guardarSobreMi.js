function guardarSobreMi() {
//toma el texto del input y reemplaza por nuevo texto ingresado
   let nuevoTexto= document.getElementById("editSobreMi").value; 
   document.getElementById("textoSobreMi").innerText=nuevoTexto;
//deja de mostrar input y boton
   document.getElementById("editSobreMi").style.display="none";
   document.getElementById("guardarSobreMi").style.display="none";
}