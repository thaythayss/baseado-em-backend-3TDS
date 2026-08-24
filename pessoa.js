class Pessoa {
    constructor(nome, idade, email, telefone, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
        this.cidade = cidade;
    }

    apresentar () {
        console.log(`Olá, sou ${this.nome}, nome ${this.idade} anos e moro em ${this.cidade}.`);
    }
}

class Pessoa1 extends Pessoa { //herança
    constructor(nome, idade, email, telefone, cidade, curso) {
        super(nome, idade, email, telefone, cidade);
        this.curso = curso;
    }
    
    estudar() {
        console.log(`${this.nome}`)
    }
}