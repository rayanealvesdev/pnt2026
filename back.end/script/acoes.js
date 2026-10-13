var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global.
// Veja mais sobre escopo no seu material em PDF

function acao1(){
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'

    var a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    } else {
         resp.innerHTML += '<h1>Igual a 6</h1>';

    }
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>';

    switch(prompt("Como está o tempo? use o chuvoso, ensolarado ou nublado")) {
        //switch("chuvoso") {
        case "chuvoso":
            resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva!</h1>';
            break;
        case "ensolarado":
            resp.innerHTML += '<h1>Vista roupas leves!</h1>';
            break;
        case "nublado":
            resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Tempo desconhecido</h1>';
            break;        

    
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'
    
    let numero = prompt ("Informe um número");
    for (let i = 0; i < numero; i++) {
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>'
    }
}

function acao4() {
    let numero = prompt ("Infome um número");
    while (numero <= 10){
        resp.innerHTML += 'Linha'+numero+'<br/>';
        numero++;
    }
}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>';
    
    let var1 = prompt("Informe um número");
    do {
        resp.innerHTML += 'Linha'+var1+'<br/>';
        var1++;
    } while (var1 <=10);
}

function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botão</p>'

    let myArray = [1,2,3,4,5,6,7,8,9,10,11];

    myArray.forEach(function(value,key) {
        resp.innerHTML += 'Chave ' + key + ' valor: ' + value + '<br/>';
    });
}

function acao7() {

    let entrada = 'Bem vindo' + prompt("Informe seu Nome:");
    var saldacao = document.getElementById('titulo');
    saldacao.textContent = entrada;

    const collection = document.getElementsByName('animal');
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].type == 'checkbox') {
            collection[i].checked = true;
        }
}

resp.innerHTML += 'Clicou no setimo botão'

document.getElementsByTagName("p")[1].innerHTML = 'Texto do paragrafo 2 substituido com sucesso'

let teste = document.getElementsByName("paragrafo");
teste [1].textContent = 'Texto do paragrafo identificado por "paragrafo" na posição 1, substituido com sucesso!';

}

function acao8() {
    resp.innerHTML += '<p> Clicou no oitavo botão</p>';

    function calcularArea() {
        let area = 3+5;
        resp.innerHTML += '<h1> Área total: '+ area +'</h1>';
    }
    calcularArea();
}