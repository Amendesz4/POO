class Animal {
// criar métodos
    constructor(tipo,nome,som,idade){
    this.tipo=tipo
    this.nome = nome
    this.som = som
    this.idade = idade
    }  
    
    // criar método latir
    latir (){
        console.log(this.nome+" está "+this.som)
    }

    // Fazer aniversário

    fazerNiver(novaIdade){
        this.idade += novaIdade
        console.log(' O '+this.nome+' fez aniversário de ' +this.idade+' anos ')

    }
}

let zeca = new Animal('cachorro','zeca','auau',12)

//console.log(zeca)
zeca.latir()
zeca.fazerNiver(1)