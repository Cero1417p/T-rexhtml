document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 32){
        console.log("salta");
    }
});


//bucle principal
var fps = 10;
setInterval(function(){
    principal();
},1000/10);

function principal(){
    console.log("sola");
}