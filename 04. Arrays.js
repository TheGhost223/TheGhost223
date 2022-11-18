//JS Arrays//

//Arrays são usadas para armazenar arquivos.s

let comida = ['Bife', 'Feijao', 'Arroz', 'Macarrao']
let numero = [10, 20, 30, 40]

// Chamar a funçao push faz REMOVER novos items a lista.

comida.push('farinha', 'batatas')
numero.push(50, 60)

// Chamar a função unshift faz ADICIONAR novos elementos no inicio da lista.

comida.unshift('cebola', 'pure')

// Chamar a função pop faz ULTIMO elemento da lista ser apagado.

comida.pop()
numero.pop()

// Chamar a função shift faz com que o PRIMEIRO elemento seja apagado.

comida.shift()
numero.shift()

// A função splice apaga de um numero até outro, (1, 5) do 1 até o 5. 

comida.splice()

// Slice significa copiar, basicamente iremos copiar alguns items e atribui-los a outra variavel.

let comida2 = comida.slice(0, 3)

// A funão length vai nos dizer quantos items temos dentro da Array.

console.log( 'temos ' + comida.length + ' variedades no prato');

// Podemos criar uma array vazia e ir adicionando em quaisquer posiçoes, subistituindo caso alguma delas esteja sendo ocupada.

let teste = []

teste[1] = "Olá"
teste[2] = "Oi"
