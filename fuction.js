//function é usada para diminuir o tamanho do codigo automatizando uma certa tarefa//


function verificarMateria(nomeProfessor, nomeMateria) {
    var materia = nomeMateria;

    switch(materia) {
        case "fisica":
            console.log(nomeProfessor + " Da aula de fisica");
            break;
        case "portugues":
            console.log(nomeProfessor + " Da aula de portugues");
            break;
        case "matematica":
            console.log(nomeProfessor + " Da aula de  matematica");
            break;
        default:
            console.log(nomeProfessor + " Da aula de alguma coisa");
    }
}

var nome = "Luiz";
var professor = "portugues";
verificarMateria(nome, professor);

var nome = "Gerson";
var professor = "fisica";
verificarMateria(nome, professor);
