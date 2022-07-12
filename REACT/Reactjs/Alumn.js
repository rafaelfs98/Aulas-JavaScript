const Person = require("./Person");

class Alumn extends Person {
  constructor(name, age, turma) {
    super(name, age);
    turma;
  }
}

module.exports = Alumn;
