

let pessoas =["Igor", "Jose", "Marcos", "Pamela"]





function sortear(){

    var np = pessoas.length;

    var ns = Math.floor(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns]

}

