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

(function(win, doc){
  'use strict';

  var $visor = doc.querySelector('[data-js="visor"]');
  var $clear = doc.querySelector('[data-js="ce-button"]');
  var $result = doc.querySelector('[data-js="result-button"]');
  var $number = doc.querySelectorAll('[data-js="number-button"]');
  var $operation = doc.querySelectorAll('[data-js="operation-button"]');

  resetVisor();

  $clear.addEventListener('click', function(){
    resetVisor();
  });

  $result.addEventListener('click', function(){
    $visor.value = calculateResult($visor.value);
  });

  $number.forEach(function(number) {
    number.addEventListener('click', function() {
      updateVisor(number.value);
    })
  });

  $operation.forEach(function(operator) {
    operator.addEventListener('click', function() {
      updateVisor(operator.value);
    })
  });

  function updateVisor(info) {
    if ($visor.value == 0) {
     $visor.value = info
    }
    else if (info.match(/\D$/) && $visor.value.match(/\D$/)) {
      $visor.value = $visor.value.replace(/\D$/, info);
    } else {
      $visor.value += info;
    }
  };

  function resetVisor() {
    $visor.value = 0;
  }

  function calculateResult(value) {
   /* value = value.match(/(\d+)(\D)(\d+)$/);
    return calculator(value[2])(value[1], value[3]);
    */

    var numbers = value.split(/\D/g);
    var operations = value.split(/\d+/g);

    return numbers.reduce(function(accumulator, current, index){
      console.log(operations[index], accumulator, current)
      return calculator(operations[index])(accumulator, current);
    });

    console.log(numbers, operations);
  };

  function calculator(operator) {
    switch(operator) {
      case '+':
        return function(a, b) {
          return a+b;
        }
        break;
      case '-':
        return function(a, b) {
          return a-b;
        }
        break;
      case '/':
        return function(a, b) {
          return a/b;
        }
      case '*':
        return function(a, b) {
          return a*b;
        }
      default:
        "Operação Inválida"
        break;
    }

  }


})(window, document);
