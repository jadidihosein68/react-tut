
export class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

const person = new Person("bagher");
