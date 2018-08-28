

  /*
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

(function(doc){
  'use strict';

   //MARK: - DOM library

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

  DOM.prototype.isArray = function isArray(element) {
    return Object.prototype.toString.call(element) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(element) {
    return Object.prototype.toString.call(element) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(element) {
    return Object.prototype.toString.call(element) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(element) {
    return Object.prototype.toString.call(element) === '[object Number]';
  };

  DOM.prototype.isString = function isString(element) {
    return Object.prototype.toString.call(element) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(element) {
    return Object.prototype.toString.call(element) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(element) {
    return Object.prototype.toString.call(element) === '[object Null]' || Object.prototype.toString.call(element) === '[object Undefined]';;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments)
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments)
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments)
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments)
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments)
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments)
  };

  //MARK: - Properties
  var $form = new DOM('[data-js="cep-form"]');
  var $cep = new DOM('[data-js="cep-input"]');
  var $requestStatus = new DOM('[data-js="request-status"]');
  var ajax = new XMLHttpRequest();

  $form.on('submit', handleClickSubmit);

  function isValidLength() {
    return (getCEP().length == 8);
  }

  function handleClickSubmit() {


    event.preventDefault();
    requestAdress();
    // if (isValidLength()) {
    //   requestAdress();
    // } else {
    //   updateStatusInformation('notvalid');
    // }

  }

  //TODO: error handling
  //TODO: center search box and animate it going up
  function requestAdress() {
      var url = getURL($cep.get()[0].value)
      updateStatusInformation('loading');
      ajax.open('GET', url);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
  }

  function handleReadyStateChange() {
    console.log(ajax.readyState, ajax.status);
    if (isRequestSuccessfull()) {
     updateCEPInformation();
    }
  }

  function isRequestSuccessfull() {
    return (ajax.readyState === 4 && ajax.status === 200);
  }

  function getURL() {
      return 'http://apps.widenet.com.br/busca-cep/api/cep/' + getCEP() + '.json/';
  }

  function getCEP() {
    return $cep.get()[0].value.match(/\d+/g).join('');
  }

  function updateCEPInformation() {
    var data = parseData();
    if(data.status == 0) {
      console.log('error', data);
      updateStatusInformation('error');
      return;
    }

    updateStatusInformation('success');
    console.log(data);
    var $infoLabel = new DOM('[data-js="cep-info"]');
    $infoLabel.get()[0].textContent = data.code;
    $infoLabel.get()[1].textContent = data.address;
    $infoLabel.get()[2].textContent = data.district;
    $infoLabel.get()[3].textContent = data.city;
    $infoLabel.get()[4].textContent = data.state;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }

  function updateStatusInformation(type){
     var message = {
      notvalid: "CEP não é válido.",
      loading: "Buscando informações para o CEP.",
      success: "Endereço referente ao CEP.",
      error: "Não encontramos o endereço para o CEP.",
    };
    $requestStatus.get()[0].textContent = message[type]
  }



})(document);


/*
anotaçoes aula
  var ajax = new XMLHttpRequest();
  ajax.open(protocol, url); - protocol: GET, POST, PUT, DELETE etc
  ajax.send(data - ou vazio);

  ajax.onreadystatechange = function () { };

  ajax.addEventListener('readystatechange', function(){ })

  ajax.readyState;
  - 0: conexao fechada, antes do open
  - 1: conexão aberta, depois do open
  - 2: headers do doc recebidos
  - 3: carregando requesiçao
  - 4: concluído

  ajax.status;
  -200, 404, 503 etc

  ajax.responseText
  - resposta em string

  var data = JSON.parse(ajax.responseText);
  - resposta em object

  ajax.responseXML;
  - resposta em xml

  erros:
  throw new Error('Mensagem de erro');
  throw new SyntaxError('Mensagem de erro');

  try {
    //tenta esse bloco de código, se tiver erro ele executa o catch
  } catch (e) {
    console.log(e + "erro atual")
  }

  */


