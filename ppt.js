var user;
var piedra = document.getElementById("piedra_id").addEventListener("click", selection1);
var papel = document.getElementById("papel_id").addEventListener("click", selection2);
var tijeras = document.getElementById("tijeras_id").addEventListener("click", selection3);
var bot_play = Math.floor(Math.random() * ((3+1)-1)+1);

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

function selection1()
{
    user = 1;
    play();
    console.log(user);
}
function selection2()
{
    user = 2;
    play();
    console.log(user);
}

function selection3()
{
    user = 3;
    play();
    console.log(user);
}



console.log(bot_play);