  /*
  O desafio dessa semana é criar uma mini library (biblioteca) para
  reutilizarmos nossos códigos quando fizermos manipulação de DOM!

  Requisitos:
  - O nome da lib deve ser "DOM".
  - Ela deve ser uma função construtora, que receberá uma string por parâmetro.
  Essa string será o nó do DOM a ser selecionado;
  - No construtor, você deve atribuir à `this.element` todos os elementos
  do DOM selecionados;
  - Extenda a lib para ter os métodos `on`, `off` e `get`.
  - O método `on` irá adicionar um listener de evento a todos os elementos
  selecionados.
  - O método `off` irá remover o listener de evento de todos os elementos
  selecionados.
  - O método `get` deve retornar os elementos.
  - O código abaixo deve funcionar corretamente após a lib criada.

  Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
  Só passe para o próximo problema quando tiver resolvido o anterior :)
  */
  // ?

(function(){
  'use strict';

  function DOM(string) {
    this.element = document.querySelectorAll(string);
  }

  DOM.prototype.on = function on(type, callbackFunction) {
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(type, callbackFunction)
    });
  }

  DOM.prototype.off = function off() {
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener()
    });
  }
  DOM.prototype.get = function get() {
    return this.element;
  }

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

  /*
  PROPERTIES
  nodeList CONTA TODOS OS BREAKLINES/ESPACOS ENTRE TAGS
  .childNodes
  .firstChild
  .lastChild
  .nextSibling
  .previousSibling

  .nodeType - retorna um número baseado no tipo
  .nodeValue - retorna o conteúdo
  .nodeName - retorna nome da tag/bloco

  .children - HTMLCollection - nao padronizada - retorna só os nós html
  .firstElementChild - primeiro filho que é elemento html
  .lastElementChild
  .nextElementSibling
  .childElementCount - retorna numero = .children.length

  METHODS
  .hasAttribute(name) - i.e. "class" - retorna boolean
  .hasAttributes() - se tem qqr atributo - retorna boolean
  .getAttibute(attribute) - retorna sempre string
  .setAttribute(attr, value)

  .appendChild(item)
  .insertBefore(node, beforeWhom)
  .cloneNode(boolean) - true: copia conteudo, falso: estrutura
  .hasChildNodes()
  .removeChild(child)
  .replaceChild(new, old)
  document.createTextNode(conteudo)
  documente.createElement(name)

  ATTRIBUTES
  element.value
  element.id
  element.className
  */

})();
