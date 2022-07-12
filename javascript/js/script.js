function calcularMedia ( notas ) {
    
    let soma = 0;
    for (c=0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media;

function aprovacao(notas){

    let media = calcularMedia(notas);

    let condicao = media >=8? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

function contagemRegressiva(numero){

    console.log(numero);
    let proximoNumero = numero - 1;

    if(proximoNumero > 0){
        contagemRegressiva(proximoNumero);
    }
            
}

document.addEventListener('submit', function( evento ){

    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));
    }

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    

})