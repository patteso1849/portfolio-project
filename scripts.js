// Create a greeter function "fxn." that will use the persons name and display 'Hello, John' in <h1>

// We will need some kind of a loop a do while loop.
// We will need to use comparison operators to confirm if the value of a variable is empty or not.

/*
  1. Ask the user for their name.
  2. Put that in memory.
  3. Construct, or concatinate, a string with 'hello' and the value stored in memory for their name.
  4.Select the <h1> on the page.
  5. Replace the value of the <h1> tag.
*/

const name = prompt('What is your name?');
console.log('name has value of:', name);

const h1 = document.querySelector('h1');

console.log('hello!');

h1.textContent = `Hello, (name)`;

document.querySelector('h1').textContent = 'Hello, &(name)';
