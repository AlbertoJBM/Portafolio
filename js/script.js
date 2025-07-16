console.log("hola mundo")
//funciones
function mensaje(){
    var saludo = "hola";
    var antisaludoo = "no me hables"
    var contento = true;

    if (contento===true){
        console.log(saludo);
    }else{
        console.log(antisaludoo);
    }
}
// funcionn para girar carta onclick
function flipCard(cardElement){
    cardElement.classList.toggle("flipped");
}