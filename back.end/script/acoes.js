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
    resp.innerHTML += '<p>Clicou no segundo botão</p>'

    switch(prompt("Como está o tempo? use o chuvoso, ensolarado ou nublado")){
        //switch("chuvoso") {
        case "chuvoso";
    }
    }
}