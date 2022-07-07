/// Maneira simples

var a = {
     nome:"Rafael",
     sobrenome: " Ferreira"
}

console.log(a);


/// Outra maneira

function obj(n, s){
    return { nome : n, sobrenome: s }
}


var a = obj("Rafael", "Ferreira");

console.log(a);


///

function obj1(n, s){
    this.nome = n;
    this.sobrenome = s;
}


var a =  new obj("Rafael", "Ferreira");

console.log(a);


