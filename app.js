function Person(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

Person.prototype.someMethod = function() {
  return `Welcome ${this.firstName} ${this.secondName}`;
}

document.getElementById('form-group').addEventListener('submit', function(e) {
  const firstName = document.getElementById('name').value,
        secondName = document.getElementById('surname').value;
        

  const person = new Person(firstName, secondName);

  console.log(person);
  console.log(person.someMethod());

  e.preventDefault();
});

