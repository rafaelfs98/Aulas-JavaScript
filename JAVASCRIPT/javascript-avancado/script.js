function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("jose", 45),
  novoAluno("Marcia", 29),
  novoAluno("Joao", 35),
];

// function nomeEidade(aluno){
//     return aluno.nome + " tem " + aluno.idade + " Anos";
// }

function nomeEidade(aluno) {
  return {
    name: aluno.nome,
    idade: aluno.idade + 5,
  };
}

console.log(alunos.map(nomeEidade));
