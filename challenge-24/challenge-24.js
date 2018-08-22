/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente; - OK
- O input deve iniciar com valor zero; - OK
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número; - ok
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷); - ok
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0; - ok

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real; - ok
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. - ok
Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x". -ok
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado. -ok
*/

//NOT WORKING FOR FLOAT NUMBERS

(function(win, doc){
  'use strict';

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonClear = doc.querySelector('[data-js="ce-button"]');
  var $buttonEquals = doc.querySelector('[data-js="equals-button"]');
  var $buttonNumbers = doc.querySelectorAll('[data-js="number-button"]');
  var $buttonOperators = doc.querySelectorAll('[data-js="operation-button"]');

  function initialize() {
    //initVariables();
    initEvents();

    getRegex(getValues($buttonOperators));

  }

  function initEvents() {
    $buttonClear.addEventListener('click', handleClickClear, false);
    $buttonEquals.addEventListener('click', handleClickEquals, false);
    //use prototype for array like elements that might not work in different browsers
    Array.prototype.forEach.call($buttonNumbers, (function(number) {
      number.addEventListener('click', handleClickNumber, false)
    }));
    Array.prototype.forEach.call($buttonOperators, (function(operator) {
      operator.addEventListener('click', handleClickOperation, false)
    }));

  }

  function handleClickNumber() {
    removeIfZero();
    updateVisor(this.value);
  }

  function handleClickOperation() {
    removeIfOperator();
    updateVisor(this.value);
  }

  function handleClickClear() {
    resetVisor(0);
  }

  function handleClickEquals() {
    resetVisor(calculateOperation($visor.value));
  };


  function removeIfZero(){
    if (isVisorEmpty()){
      $visor.value = removeLastItem($visor.value);
    }
  };

  function removeIfOperator() {
    if(isLastItemAnOperator($visor.value)) {
      $visor.value = removeLastItem($visor.value)
    }
  }

  function isLastItem(string, elements) {
    if (string.match(getRegex(elements))) {
      return true;
    }
    return false;
  }

  function resetVisor(value) {
    $visor.value = value;
  }

  function updateVisor(value) {
    $visor.value += value;
  }

  function getRegex(array) {
    return new RegExp('[' + array.join('') + ']', 'g');
  }

  function getValues(list) {
    return Array.prototype.map.call(list, function(item){
      return item.value;
    });
  }

  function isVisorEmpty() {
    if ($visor.value == 0) {
      return true;
     }
     return false;
  }

  function isLastItemAnOperator(string) {
    if (string.match(/\D$/)) {
      return true;
    }
    return false;
  }

  function removeLastItem(string) {
    return string.slice(0,-1);
  }

  function calculateOperation(string) {
    var numbers = string.split(/\D/g);
    var operations = string.split(/\d+/g);

    console.log(numbers, operations);

    return numbers.reduce(function(accumulator, current, index){
      return calculate(operations[index], accumulator, current);
    });
  }

  function calculate(operator, a, b) {
    switch(operator) {
      case '+':
        return a+b;
        break;
      case '-':
        return a-b;
        break;
      case '÷':
        return a/b;
        break;
      case 'x':
        return a*b;
      default:
        return "Operação Inválida"
        break;
    }
  }

  initialize();

})(window, document);
