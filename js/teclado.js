

let filateclas1=["°","!","#","$","%","&","/","(",")","=","?","¿"]
let filateclas2=[`q`,`w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p`,`¨`,`*`,`a`,`s`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`ñ`,`{`,`}`,`z`,`x`,`c`,`v`,`b`,`n`,`m`,`,`,`.`,`.`,`-`]
let filateclas3=['','/','*','-','7','8','9','4','5','6','1','2','3','0','.','+']
let pantalla = "";

//Primera fila de teclado
const escribir = (i) =>{
        pantalla = pantalla + filateclas1[i];
        document.getElementById("pantalla").value = pantalla;
        //console.log(dato)
}

//Segunda fila de teclado
const teclas = (i) =>{
    pantalla = pantalla + filateclas2[i];
    document.getElementById("pantalla").value = pantalla;
    //console.log(dato)
}


//Tercera fila de teclado
const numero = (i) =>{
    pantalla = pantalla + filateclas3[i];
    document.getElementById("pantalla").value = pantalla;
}


//Espacio
function teclaesp(){
espacio = "  ";
document.getElementById("pantalla").value= pantalla;
pantalla = pantalla + espacio;
}

const borrar = () => {
    pantalla = "";
    document.getElementById("pantalla").value = pantalla;
}