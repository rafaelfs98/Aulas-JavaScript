

function novoAluno(nome, idade){
    return {nome, idade}

}

let alunos = [
        novoAluno("Mario", 23),
        novoAluno("jose",45),
        novoAluno("Marcia", 29),
        novoAluno("Joao", 35)
]

// for(let aluno of alunos){
//     if(aluno.idade < 30 ){
//         alert(aluno.nome)

//     }
// }


function temMenosde30(aluno){
    return aluno.idade < 30
}

function temMaisde30(aluno){
    return aluno.idade > 30
}

function filtro(callback){

    let alunosFiltrados = [];
    for(let aluno of alunos){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }

    }

    return alunosFiltrados;
    
}

// let alunosComMenosde30 = alunos.filter(temMenosde30)

alunos.filtro = filtro

 console.log(alunos.filtro(temMaisde30));

 console.log(alunos.filter(temMaisde30));


