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

let fname = prompt('What is ur first name?');
let lname = prompt('What is ur last name?');

while(!fname || !lname) {
  fname = prompt('What is ur first name?');
  lname = prompt('What is ur last name?');

}

document.querySelector('#greeting').innerHTML = '<p>Hello, ${fname} ${lname}</p>';
