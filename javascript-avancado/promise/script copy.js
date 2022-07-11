let usuarios = ["Rafael", "ferreira", "Sousa"];

function insirirUsuario(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(usuarios);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro" });
      }
    }, 1000);
  });

  return promise;
}

function listarUsusarios() {
  console.log(usuarios);
}

async function executar() {
  await insirirUsuario("Rafael");
  listarUsusarios();
}

executar();