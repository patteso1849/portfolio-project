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

const x = 3;

if( x === 3){
  console.log('hello form if statement')
};
else if(x === 5){
  console.log('x was nnot equal to 3 but is equal to 5xs')
}
else{
  console.log('x was not equal to 3 or 5')
};

const h1 = document.querySelector('h1');

console.log('hello!');

h1.textContent = `Hello, (name)`;

document.querySelector('h1').textContent = 'Hello, &(name)';

//console.log(x === 3 && x === 4);
//console.log(Boolean(!test));
//console.log(!x);
//console.log(7 + 7);
//console.log('7' + 7 + 'uber');
//console.log(typeof ('7' + 7 + null))
//console.log((7 + 7) === ('7' + 7));
//console.log(name === "Steve");
//console.log(x === 5, x <= 5, x>= 5);
//console.log(`the answer is`);
//const myFakeBook = 'True';
//console.log(Boolean(name));
//console.log(Boolean(0));
//console.log(Boolean(-909899));
//console.log(Boolean(-catdog));
//console.log(Number(name));
//console.log(typeof String(7838));
//console.log(name);

// const firstGreeting ="Hello";
// const name = "John";
// const fullGreeting = `${firstGreeting} ${name} is the assignment`;
// console.log(fullGreeting);

/*
// Create a function that recives a number and checks if its add or even

/*
1. Recieve a number argument
2. if number (mod)% 2 === 1 that number is odd.
3. Return a string that sya whether its odd or even
*/

// function Declaration
// 'num' is an arbitrary name - its a named parameter.
// When a function is invoked we pass in a argument to satify the naked paramenter.
//function oddOrEven(num){
  //if
  //return
// }

*/


