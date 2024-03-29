/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const games = ['god of war', 'gears of war', 'horizon zero down', 'the last of us', 'potion punch'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const showGames = (games) => {
    return games;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(showGames(games)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
const index = (value, i) => {
    return value[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const randomArr = ['string', 0, {obj: ''}, true, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(index(randomArr, 0));
console.log(index(randomArr, 1));
console.log(index(randomArr, 2));
console.log(index(randomArr, 3));
console.log(index(randomArr, 4));

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
const book = (bookName) => {
    const catalogo = {
        'Harry Potter e a Pedra Filosofal': {
            quantidadePags: 256,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        },
        'Harry Potter e a Câmara Secreta': {
            quantidadePags: 287,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        },
        'Harry Potter e o Prisioneiro de Askaban': {
            quantidadePags: 394,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        }
    };

    if (!bookName) {
        return catalogo;
    }

    return catalogo[bookName];
};


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log('imprime catalogo completo', book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Harry Potter e o Prisioneiro de Askaban', book('Harry Potter e o Prisioneiro de Askaban').quantidadePags, 'páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter e o Prisioneiro de Askaban é', book('Harry Potter e o Prisioneiro de Askaban').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter e o Prisioneiro de Askaban foi publicado pela editora', book('Harry Potter e o Prisioneiro de Askaban').editora);