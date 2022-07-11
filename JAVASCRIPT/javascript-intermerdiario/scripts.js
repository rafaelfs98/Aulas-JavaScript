// function mudarCor(){
//     let h = document.getElementsByTagName("h1")[0];

//     h.style.color = "blue";

// }

var numero = 0;

var interval;

var timer;

function AtualizarText() {
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML += " " + numero;

  numero++;
}

function iniciar() {
  //   setTimeout(mudarCor,1000)
 // interval = setInterval(AtualizarText, 1000);
    timer = setTimeout(AtualizarText, 1000);
}

function parar(){

    clearTimeout(timer);
}
