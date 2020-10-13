var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    character.addClass("animate");
    setTimeout(function() {
        character.removeClass("animate")
    },500);
}