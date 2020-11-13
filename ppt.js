var user;
var botones = document.getElementsByClassName("boton");
var bot_play = Math.floor(Math.random() * ((3+1)-1)+1);
console.log(bot_play);

for(var i = 0; i < botones.length; i++)
{
    botones[i].addEventListener("click", selection, false)
}
function play() {
if(user === bot_play)
{
    alert("empate");
}
else{
var confrontation = (user === 1 && bot_play === 3) || 
(user === 2 && bot_play === 1) || 
(user === 3 && bot_play === 2) ? "Ganasteeeee!!" : "perdiste, intenta otra vez con el boton F5";
alert(confrontation);
    }
}

function selection()
{
   switch(this.id)
   {
    case "piedra_id":
        user = 1 ;
        console.log(user);
        play();
        break;

    case "papel_id":
        user = 2 ;
        console.log(user);
        play();
        break;

    case "tijeras_id" :
        user = 3 ;
        console.log(user);
        play();
        break;

   }
}
console.log(bot_play);