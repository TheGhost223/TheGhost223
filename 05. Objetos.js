//JS Objetos//

//Criando Objeto.

let kauan = {
    peso    : 60,
    idade   : 16,
    altura  : 1.80,
    curso   : "Programação"
}

let produtos = {
    descricao : ['arroz'],
    preco : []
}

// Para acessar uma propriedade devemos chamar o objeto logo a propriedade desejada.ss

kauan.idade
kauan.altura

// Atualizar os valores da propriedade

produtos.descricao = [...produtos.descricao, 'feijao']

// Subistituir os valores da propriedade

produtos.preco = [7.99, 4.88]
