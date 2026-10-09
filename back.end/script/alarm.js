var display = document.getElementById("display");

var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

var comecar = document.getElementById("comecar");

var conometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for (var i=0; i<=59; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for (var i=0; i<=59; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

    interval = setInterval(function(){
    
    if (segundoAtual > 0) {
        segundoAtual--;

    }

        else if (minutoAtual > 0) {
            minutoAtual--;
            segundoAtual = 59;
        }

        else {
            document.getElementById("sound").play();
            alert("Desligar Alarme!");
            clearInterval(interval);
            location.reload();

             }

        
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
        },1000);

    });