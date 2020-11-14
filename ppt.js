var user;
var botones = document.getElementsByClassName("boton");
var G;
for(var i = 0; i < botones.length; i++)
{
    botones[i].addEventListener("click", selection, false)
}
function play() {
if(user === G)
{
    alert("empate");
}
else{
var confrontation = (user === 1 && G === 3) || 
(user === 2 && G === 1) || 
(user === 3 && G === 2) ? "Ganasteeeee!!" : "jaja, te gane. presiona F5 si quieres intentarlo otra vez";
alert(confrontation);
    }
}

function selection()
{
   switch(this.id)
   {
    case "piedra_id":
        user = 1 ;
        G = 2
        console.log(user);
        play();
        break;

    case "papel_id":
        user = 2 ;
        G = 3 ;
        console.log(user);
        play();
        break;

    case "tijeras_id" :
        user = 3 ;
        G = 1 ;
        console.log(user);
        play();
        break;

   }
}
