let num = 44;

const ner = "Bat";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log("This person's name is " + this.name);
  }
}

function printAge(obj) {
  console.log("This person's age is " + obj.age);
}

export default Person;
export { num, printAge };
