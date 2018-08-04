/*
Envolva todo o código desse desafio em uma IIFE.
*/
( function() { 
    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    console.log( 'Number Objects Array:' );
    // ?
    var numberObjects = [];

    for (var i = 1; i < 11; i++) {
        numberObjects.push({number: i});
    }
    console.log(numberObjects);

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
    console.log( '\nJust Numbers:' );
    // ?
    var justNumbers = []; 

   numberObjects.forEach(function(item){
        justNumbers.push(item.number);
    });
    console.log("forEach: ", justNumbers);

    var justNumbers2 = numberObjects.map(function(item){
        return item.number;
    });
   
    console.log("map: ", justNumbers2);

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
    console.log( '\nJust module of division by 2 or 3:' );
    // ?
    var justMod2Or3 = justNumbers.filter(function(item){
        return item % 2 === 0 || item % 3 === 0;
    });
    
    console.log(justMod2Or3);
    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    console.log( '\nOperation:' );
    // ?
    var operation = justMod2Or3.reduce(function(preVal, item, index, array){
        return (preVal + 1) * item;
    }, 0);

    console.log(operation);
    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    console.log( '\nOperation 2:' );
    // ?
    var operation2 = justMod2Or3.reduceRight(function(preVal, item, index, array){
        return (preVal + 1) * item;
    }, 0);

    console.log(operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    console.log( '\nSeu nome na língua do "P":' );
    // ?
    var name = ['A', 'na', 'Ca', 'ro', 'li', 'na', 'Ba','rre', 'to']
    console.log(name.reduce(function(previous, current){
        return previous + ' P' + current;
    }, ''));

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log( '\nInversed Name:' );
    // ?

    var inversedName = name.reduceRight(function(previous, current){
        return previous + current;
    });

    console.log("reduceRight(): ", inversedName);

    var inversedName2 = name.reverse().join(''); 
    console.log("reverse().join(): ", inversedName2);

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    // ?
    console.log(numberObjects);

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log( '\nExiste um { number: 2 } em numberObjects?' );
    // ?

    (numberObjects.indexOf({number: 2}) != -1) 
    ? console.log("Existe um objeto { number: 2 } em numberObjects!")
    : console.log("Não existe um objeto { number: 2 } em numberObjects :(");
    

    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    // ?
    //note: compara referencias de objetos, por isso retorna falso
    (numberObjects.lastIndexOf({number: 2}, 2) != -1) 
    ? console.log("Existe um objeto { number: 2 } em numberObjects!")
    : console.log("Não existe um objeto { number: 2 } em numberObjects :(");
    
    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );

    if (Array.isArray(justMod2Or3)) {
     console.log("join: ", justMod2Or3.join(' '));
     console.log("toString: ", justMod2Or3.toString());
    }
    // ?
}) ();