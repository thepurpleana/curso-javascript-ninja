//NOT WORKING FOR FLOAT NUMBERS
//use prototype for array like elements that might not work in different browsers

(function(win, doc){
  'use strict';

  //MARK: - Properties
  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonClear = doc.querySelector('[data-js="ce-button"]');
  var $buttonEquals = doc.querySelector('[data-js="equals-button"]');
  var $buttonNumbers = doc.querySelectorAll('[data-js="number-button"]');
  var $buttonOperators = doc.querySelectorAll('[data-js="operation-button"]');

  //MARK: - Initializers
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

  //MARK: - Event Handlers
  function handleClickNumber() {
    updateVisor(removeIf(isVisorEmpty) + this.value);
  }

  function handleClickOperation() {
    updateVisor(removeIf(isLastItemAnOperator) + this.value);
  }

  function handleClickClear() {
    updateVisor(0);
  }

  function handleClickEquals() {
    updateVisor(calculateResults($visor.value));
  }

  //MARK: - Visor Update and Verifying functions
  function updateVisor(value) {
    $visor.value = value;
  }

  function removeIf(condition){
    if (condition())
      return removeLastItem($visor.value);
    return $visor.value;
  }

  function removeLastItem(string) {
    return string.slice(0,-1);
  }

  function isVisorEmpty() {
    return ($visor.value == 0);
  }

  function isLastItemAnOperator() {
    return ($visor.value.match(/\D$/));
  }

  //MARK: - calculating functions
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
