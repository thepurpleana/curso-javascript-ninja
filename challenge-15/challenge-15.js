/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

(function(){

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  // ?
  function Person(name, lastName, age) {

    var name, lastName, age;

    this.name = name; 
    this.lastName = lastName;
    this.age = age;

    var getFullName = function() {
      return this.name + " " + this.lastName;
    };

    var getAge = function() {
      return this.age;
    };

    var addAge = function(years) {
      this.age += years;
      return this;
    };

  }
  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  // ?
  var anac = new Person("Ana", "Carolina Barreto", 23);
  var anaj = new Person("Ana", "Julia Barreto", 17);
  var gui = new Person("Guilherme", "Barreto", 15);

  var family = [anac, anaj, gui]

  console.log(family);

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  // ?

  family.forEach(function(person){
    console.log(person.name + " " + person.lastName);
  });

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  // ?

  family.forEach(function(person){
    console.log(person.name + " " + person.lastName + " tem " + person.age + " anos.");
  });

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  // ?

  family.forEach(function(person){
    person.age += rand
    console.log(person.name + " " + person.lastName + " agora tem " + person.age + " anos.");
  });

}) ();