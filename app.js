// Person constructor
function Person(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

// Person prototype/method
Person.prototype.addNames = function() {
  return `Welcome ${this.firstName} ${this.secondName}!`;
}

// UI
document.getElementById('form-group').addEventListener('submit', function(e) {
  const firstName = document.getElementById('name').value,
        secondName = document.getElementById('surname').value;
        
  // Create a person      
  const person = new Person(firstName, secondName);

  // Create element
  const createCard = document.createElement('card');
  // Append Child
  createCard.appendChild(document.createTextNode(person.addNames()));
  // Add to card
  const card = document.getElementById('card');
  // Add class to card
  createCard.className = 'card name';
  // Add new card to main card
  card.appendChild(createCard);
  // Clear input
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  //form.reset();

  console.log(createCard);
  console.log(person);
  console.log(person.addNames());

  e.preventDefault();
});

// ........................


