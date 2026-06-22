const dadosDoAluno = require('./aluno.json');

console.log("---- Sistema Escolar ---");
console.log(`Nome: ${dadosDoAluno.nome}`);
console.log(`Curso: ${dadosDoAluno.curso}`);
console.log(`Idade: ${dadosDoAluno.idade}`);

if (dadosDoAluno.bolsista) {
    console.log("Status: Este aluno possui isenção de mensalidade.");
} else {
    console.log("Status: Mensalidade padrão.");
}
