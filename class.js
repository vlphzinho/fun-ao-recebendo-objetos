console.log('___________________________________________________________________');

class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade){
      this.nome = nome;
      this.idade = idade;
      this.anoNascimento  = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome e: ${this.nome}, e Minha idade e: ${this.idade}`);
    }
}

function compararPessoa(p1,p2){
    if(p1.idade > p2.idade){
      console.log(`${p1.nome} e mais velho(a) que ${p2.nome} `);
    }else if(p2.idade > p1.idade){
      console.log(`${p2.nome} e mais velho(a) que ${p1.nome} `);
    }else{
      console.log(`${p1.nome} e ${p2.nome} tem a mesma idade `);
    }
}


const victor = new pessoa('victor', 24);
const hui= new pessoa('hui', 37);

compararPessoa(victor,hui);

console.log('___________________________________________________________________')
