var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate")
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<170 && blockLeft>150 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        Swal.fire({
            title: 'You Lose!',
            showDenyButton: true,
            confirmButtonText: `Play again!`,
            denyButtonText: `Go back`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                location.reload();
            } else if (result.isDenied) {
                location.replace("index.html");
            }
        })
    }
},10);