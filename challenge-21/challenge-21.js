/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?

(function(){
    'use strict'; 

    var $startButton = document.querySelector('button[data-js="startButton"]')
    var $pauseButton = document.querySelector('button[data-js="pauseButton"]')
    var $resetButton = document.querySelector('button[data-js="resetButton"]')
    var $timerLabel = document.querySelector('[data-js="timerLabel"]');
    var timer; 



    $startButton.addEventListener('click', function() {
        timer = pomodoro({minutes: 25, seconds: 0});
    }, false);

    $pauseButton.addEventListener('click', function(){

    })

    $resetButton.addEventListener('click', function(){
        //zerar label
        $timerLabel.innerHTML = "25:00"
        clearTimeout(timer); 
    })
    

    function pomodoro(value) {
        //atualizar label
        updateTimerLabel(value);

        if (value.minutes == 0 && value.seconds == 0) {
            return;
        }
        if (value.seconds == 0) {
            value.minutes--;
            value.seconds = 60; 
        }
        timer = setTimeout(function(){pomodoro({minutes: value.minutes, seconds: value.seconds-1})}, 1000);

    }

    function updateTimerLabel(value) {

        var label = '';

        if (value.minutes < 10) label = "0";
        label = label + value.minutes + ":"; 

        if (value.seconds < 10) label += "0";
        label += value.seconds; 

        $timerLabel.innerHTML = label;
        
    }




})(); 