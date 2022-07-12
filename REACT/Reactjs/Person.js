class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log("Ola, tudo bom ? Meu nome e", this.name);
  }
}

module.exports = Person;
