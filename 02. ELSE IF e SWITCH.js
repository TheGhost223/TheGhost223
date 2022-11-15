//Duas formas diferentes de escrever o mesmo codigo, para melhor organizaçao switch deve ser usado.//

var nome = "kauan";
var emprego = "desenvolvedor";

switch(emprego){
    case "policial":
        console.log(nome + " É um policial.");
        break;
    case "cozinheiro":
        console.log(nome + " É um cozinheiro.");
        break;
    case "desenvolvedor":
        console.log(nome + " É um desenvolvedor");
        break;
    default:
        console.log(nome + " Trabalha com alguma coisa.");
}

//Tambem pode ser escrito como//

if(emprego === "policial") {
    console.log(" É um policial");
} else if(emprego === "conzinheiro"){
    console.log(nome + " É um cozinheiro.");
} else if (emprego === "desenvolvedor"){
    console.log(nome + " É um desenvolvedor");
} else {
    console.log(nome + " Trabalha com alguma coisa.");
}
