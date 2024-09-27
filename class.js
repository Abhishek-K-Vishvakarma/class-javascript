// Normal class decleration...


class Person{
  constructor(name){
    this.name = name;
  }
  getData(){
    return this.name;
  }
}
let person = new Person("Hello");
console.log(person)
console.log(typeof person);

let p1 = person.getData();
console.log(p1);
console.log(typeof p1);

// class decleration with super keyword...

class Employee{
  constructor(salary){
    this.salary = salary;
  }
}

class Management extends Employee{
  constructor(salary, bonus){
    super(salary);
    this.bonus = bonus;
  }
}

let empsal = new Management(50000,2000);
console.log(empsal);
console.log(empsal.salary);
console.log(empsal.bonus);

// class decleration with new.target...

class Human{
  constructor(name){
    this.name = name;
    console.log(new.target.name);
  }
}

class Ins extends Human{
  constructor(name, title){
    super(name);
    this.title = title;
  }
}

let one = new Human('Male');
let two = new Ins('Abhi', 'Vish');

