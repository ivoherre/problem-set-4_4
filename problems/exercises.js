// Question 1
function makeCounter(startingValue) {
  let counter = startingValue;

  function increaseCounter() {
    return counter += 1;
  }
  return increaseCounter;
}


// Question 2
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  drawCircle() {
    return `Drawing a ${this.color} circle.`
  }
  getCircumference() {
    return this.radius * 2 * Math.PI
  }
  getArea() {
    return Math.PI * this.radius ** 2
  }
  changeColor(newColor) {
    return this.color = newColor;
  }

}

// Question 3
class Teacher {
  constructor(name, school, grade, subject, students) {
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
  }
  addStudent(student) {
    this.students.push(student)
    return this.students.length
  }
  changeSchools(schools) {
    this.school = schools
    return schools;
  }
}

// Question 4
class BankAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = 0;
  }
  showBalance() {
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  deposit(num) {
    this._balance += num;
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  withdraw(num) {
    if (num > this._balance) {
      return `You do not have enough funds.`
    } else {
    this._balance -= num;
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
}
}

module.exports = {
  makeCounter,
  Circle,
  Teacher,
  BankAccount
};
