//Devemos enxergar && como 'E'. O retorno sera verdadeiro apenas se tudo dentro do parenteses for verdade//

var macas = 4;
var todasSaoverdes = false;

if(macas > 1 && todasSaoverdes === true){
    console.log("Tem mais de uma maça e todas sao verdes")
} else{
    console.log("Não tem mais de uma maça ou nem todas sao verdes")
}

// Ja o || devemos ve-lo como "Ou". Basta um dos questionamentos ser verdadeiro para o retorno ser true//

var carros = 6;
var mesmaMarca = false;

if(carros === 5 || mesmaMarca === true){
    console.log("Ou todos os carros sao da mesma marca");
    console.log("Ou temos cinco carros");
    console.log("Ou as duas coisas juntas");
} else {
    console.log("Não temos cinco carros e nem todos sao da mesma marca")
}

