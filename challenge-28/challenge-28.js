

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

(function(DOM, doc){
  'use strict';


  //MARK: - Properties
  var $form = new DOM('[data-js="cep-form"]');
  var $cep = new DOM('[data-js="cep-input"]');
  var $requestStatus = new DOM('[data-js="request-status"]');
  var ajax = new XMLHttpRequest();

  //MARK: - Input Handler

  $form.on('submit', handleClickSubmit);

  function handleClickSubmit() {
    event.preventDefault();
    requestAdress();
  };

  function getURL() {
      return 'http://apps.widenet.com.br/busca-cep/api/cep/' + getCEP() + '.json/';
  };

  function getCEP() {
    return $cep.get()[0].value.match(/\d+/g).join('');
  };

  //MARK: - Request

  function requestAdress() {
      var url = getURL($cep.get()[0].value)
      updateStatusInformation('loading');
      ajax.open('GET', url);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
  };

  function handleReadyStateChange() {
    console.log(ajax.readyState, ajax.status);
    if (isRequestSuccessfull()) {
     updateCEPInformation();
    }
  };

  function isRequestSuccessfull() {
    return (ajax.readyState === 4 && ajax.status === 200);
  };

  //MARK: - update site information

  function updateCEPInformation() {
    var data = parseData();
    if(data.status == 0) {
      console.log('error', data);
      updateStatusInformation('error');
      return;
    };

    updateStatusInformation('success');
    console.log(data);
    var $infoLabel = new DOM('[data-js="cep-info"]');
    $infoLabel.get()[0].textContent = data.code;
    $infoLabel.get()[1].textContent = data.address;
    $infoLabel.get()[2].textContent = data.district;
    $infoLabel.get()[3].textContent = data.city;
    $infoLabel.get()[4].textContent = data.state;
  };

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  };

  function updateStatusInformation(type){
     var message = {
      notvalid: "CEP não é válido.",
      loading: "Buscando informações para o CEP.",
      success: "Endereço referente ao CEP.",
      error: "Não encontramos o endereço para o CEP.",
    };
    $requestStatus.get()[0].textContent = message[type]
  };



})(window.DOM, document);


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


