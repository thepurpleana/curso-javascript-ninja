/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var myArray = [10, 20, 34, 34, 3];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function getArray(a) {
    return a; 
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
   console.log( getArray(myArray)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function getAtIndex(arg, i) {
    return arg[i];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var myObject = {
    isEmpty: false,
    content: "nothing"
}

var messArray = [2, "hello", false, {b: 34}, myObject];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

for (var i=0; i < messArray.length; i++) {
    console.log(getAtIndex(messArray, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function searchBook(name) {
    var library = {
        'bookName': {
            quantidadePaginas: 200,
            autor: "Euzinha",
            editora: "Intrinseca"
        },
        'bookName2': {
            quantidadePaginas: 200,
            autor: "Euzinha",
            editora: "Intrinseca"
        },
        'bookName3': {
            quantidadePaginas: 200,
            autor: "Euzinha",
            editora: "Intrinseca"
        },
    };

    return !name ? library : library[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(searchBook());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var book = 'bookName';
var selected = searchBook(book);
console.log("O livro " + book + " tem " + selected.quantidadePaginas + " páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O autor do livro " + book + " é " + selected.autor + ".");
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log("O livro " + book + " foi publicado pela editora " + selected.editora + ".");