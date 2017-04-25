// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const soma = (x, y) => {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const result = soma(5, 5) + 5

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
let nome = '';

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const injectValue = () => {
  nome = 'Camila'
  return `O valor da variável agora é ${nome}.`
}

// Invoque a função criada acima.
injectValue();

// Qual o retorno da função? (Use comentários de bloco).
/* 1 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const multiply = (x, y, z) => {
  if (!x || !y || !z) {
    return 'Preencha Todos os Valores corretamente!'
  }
  return (x * y * z) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ->> 'Preencha Todos os Valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ->> 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function try(x,y,z) {
  if (arguments.length === 1) {
    return arguments[0]
  } else if (arguments.length === 2) {
    return arguments[0] + arguments[1]
  } else if (arguments.length === 3) {
    return (arguments[0] + arguments[1]) / arguments[2]
  } else if (!arguments.length) {
    return false
  }
  return null
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
try(1) // 1
try(1, 2) // 3
try(5, 5, 2) // 5
try() // false
