//Print uma mensagem dizendo para 
//poder jogar um jogo
alert("Bem-Vindo ao Jogo Jogo\nDescubra a charada!\nSó dê okay se já souber as respostas");
alert('RESPONDA EM CAIXA ALTA!')
//Print descubra a charada

//Charada

//Criar uma ajuda

var errou = 0;

//Receba a resposta
alert('Y35HU4');
var resposta = prompt('Resposta');

do {
  
  if (resposta === 'JESUS'){
    alert('parabens, Correto!');
    errou = 0;
} else {
    alert('errou! tente de novo.');
    resposta = prompt('Resposta');
    ++errou;
    
      if (errou > 2){
     alert('Tente ler. Quem é?');
        }  
    
   }
} while (resposta !== 'JESUS');
alert('Correto!')
// proxima charada
errou = 0;
alert('Vamos para a proxima');
alert('Lembre de juntar as respostas!');

// charada 2
alert('ASCII\nA = 0001\n0003\n0022\n0011\n0023\n0024\n0017');

var resposta = prompt('Resposta');

do {
  
  if (resposta === 'CRISTO'){
    alert('parabens, Correto!');    
    errou = 0;
} else {
    alert('errou! tente de novo.');
    resposta = prompt('Resposta');
    ++errou;
        if (errou > 2){
          alert('O U G1D0');
        }
}  

} while (resposta !== 'CRISTO');
alert('Correto!')
//Proxima Charada

// proxima charada
var errou = 0;
alert('Vamos para a proxima');
alert('Lembre de juntar as respostas!');

// charada 3
alert('TRIANGULO\nO que pertence a quem fala');

var resposta = prompt('Resposta');

do {
  
  if (resposta === 'MEU'){
    alert('parabens, Correto!');    
    errou = 0;
} else {  
    alert('errou! tente de novo.');
    resposta = prompt('Resposta');
    ++errou
        if (errou > 2){
          alert('Vai no dicionario');
        }
}  

} while (resposta !== 'MEU');
alert('Correto!')
//Proxima charada

// proxima charada
resposta = "";
errou = 0;
alert('Vamos para a proxima');
alert('Lembre de juntar as respostas!');

// charada 4
alert('AMOS 3.8\nSubstantivo Proprio\nBKJA - PT');

var resposta = prompt('Resposta');

do {
  
  if (resposta === 'SENHOR'){
    alert('parabens, Correto!');    
    errou = 0;
} else {   
    alert('errou! tente de novo.');
    resposta = prompt('Resposta');
    ++errou
        if (errou > 2){
          alert('Veja o significado');
        }
}  

} while (resposta !== 'SENHOR');
alert('Correto!')
//Agora Junte e forme a frase


alert('Parabens, agora finalize o jogo, junte as respostas!');

var resposta = prompt('Resposta');

do {
  
  if (resposta === 'JESUS CRISTO MEU SENHOR'){
    alert('parabens, Correto!');   
    errou = 0;
} else {   
    alert('errou! tente de novo.');
    resposta = prompt('Resposta');
    ++errou
        if (errou > 2){
          alert('Junte as respostas anteriores e dê espaço entre elas');
        }
}  

} while (resposta !== 'JESUS CRISTO MEU SENHOR');


alert('GAME OVER!');

// Frase para ganhar o chocolate

alert('Me fale a frase e ganhe um chocolate!')