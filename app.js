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

  // Show alert
  const alert = document.getElementById('success');
  alert.style.display = 'block';

  e.preventDefault();
});

// Close notification
document.getElementById('close').addEventListener('click', function() {
  const alert = document.getElementById('success');
  alert.style.display = 'none';
})

// ........................

// Print date

const newElement = document.createElement('card');
newElement.className = 'card';

newElement.appendChild(document.createTextNode('Hi and something else goes here'));

const placeholder = document.getElementById('placeholder');
placeholder.appendChild(newElement);

// Mega nav toggle
const megaNav = document.getElementById('mega-nav');
const navRelease = document.getElementById('nav-release');
navRelease.addEventListener('click', function() {

  const brand = document.getElementById('nav-release');

  if (megaNav.style.display === 'block') {
    megaNav.style.display = 'none';
  } else {
    megaNav.style.display = 'block';
  }
})