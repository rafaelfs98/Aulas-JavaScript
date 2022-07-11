let usuarios = ["Rafael", "ferreira", "Sousa"];

function insirirUsuario(nome, callback) {
  setTimeout(() => {
    usuarios.push(usuarios);
    callback();
  }, 1000);
}

function listarUsusarios() {
  console.log(usuarios);
}

insirirUsuario("Rafael", listarUsusarios);
