/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

(function(win, doc){
  'use strict';

  //TODO: - Criar Mais Frases
  var possibleText = ['nop', 'nananinanão', 'nah', 'não', 'só não', 'de maneira nenhuma', 'nunca', 'não, obrigada', 'naããããaaaaaaao']
  var $movingText = doc.getElementById("text");
  var size = 15;

  $movingText.addEventListener('mouseenter', handleMouseEnter, false);

  //TODO: handleMouseClick
  //TODO: from a cute to a bold font
  //TODO: text from light blue to red
  //TODO: center and shake after a while
  //TODO: background from light to dark
  //TODO: broken screen

  function handleMouseEnter() {
    if (size < 100)
      $movingText.innerHTML = changeMessage();
    else
      $movingText.innerHTML = 'ME DEIXA EM PAZ!';
    changePosition()
  }

  function changeMessage() {
    return possibleText[getRandomInt(possibleText.length)];
  }

  function changePosition() {
    $movingText.style.color = "red";
    size += 2;
    $movingText.style.fontSize = size + "px";
    $movingText.style.top = 10 + getRandomInt(60) + '%';
    $movingText.style.left = getRandomInt(40) + '%';

  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

})(window, document);
