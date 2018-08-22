//NOT WORKING FOR FLOAT NUMBERS
//use prototype for array like elements that might not work in different browsers

(function(win, doc){
  'use strict';

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonClear = doc.querySelector('[data-js="ce-button"]');
  var $buttonEquals = doc.querySelector('[data-js="equals-button"]');
  var $buttonNumbers = doc.querySelectorAll('[data-js="number-button"]');
  var $buttonOperators = doc.querySelectorAll('[data-js="operation-button"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $buttonClear.addEventListener('click', handleClickClear, false);
    $buttonEquals.addEventListener('click', handleClickEquals, false);
    Array.prototype.forEach.call($buttonNumbers, (function(number) {
      number.addEventListener('click', handleClickNumber, false)
    }));
    Array.prototype.forEach.call($buttonOperators, (function(operator) {
      operator.addEventListener('click', handleClickOperation, false)
    }));
  }

  function handleClickNumber() {
    updateVisor(removeIfZero() + this.value);
  }

  function handleClickOperation() {
    updateVisor(removeIfOperator() + this.value);
  }

  function handleClickClear() {
    updateVisor(0);
  }

  function handleClickEquals() {
    updateVisor(calculateResults($visor.value));
  }

  function updateVisor(value) {
    $visor.value = value;
  }

  function removeIfZero(){
    if (isVisorEmpty())
      return removeLastItem($visor.value);
    return $visor.value;
  }

  function removeIfOperator() {
    if(isLastItemAnOperator())
      return removeLastItem($visor.value);
    return $visor.value;
  }

  function removeLastItem(string) {
    return string.slice(0,-1);
  }

  function isVisorEmpty() {
    if ($visor.value == 0)
      return true;
    return false;
  }

  function isLastItemAnOperator() {
    if ($visor.value.match(/\D$/))
      return true;
    return false;
  }

  function calculateResults(string) {
    var numbers = string.split(/\D/g);
    var operations = string.split(/\d+/g);

    return numbers.reduce(function(accumulator, current, index){
      return calculate(operations[index], accumulator, current);
    });
  }

  function calculate(operator, a, b) {
    switch(operator) {
      case '+':
        return a+b;
      case '-':
        return a-b;
      case '÷':
        return a/b;
      case 'x':
        return a*b;
      default:
        console.log("De alguma maneira, a calculadora enviou um valor que não está presente como botão")
        return "Operação Inválida"
    }
  }

  initialize();

})(window, document);
