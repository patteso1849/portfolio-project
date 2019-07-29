import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'This is the page Title!'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};


function render(state){
    console.log('state came in as:', state);

    document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;
}

render(states.home);

const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

console.log(navItems);


navItems.forEach(function eventListenAdder(navItem){
    navItem.addEventListener('click' , function(event){
        event.preventDefault();


        console.log(event.target.textContent);
    });
});

// let i = 0;
// TODO: Refactor this loop structure.
// i will run from 0 until 3

// while(i < navItems.length){
//     // console.log(preventDefault);

//     // use the value of i as an index to access the navItem.

//     navItems[i].addEventListener('click',


//         // add this call back function to each of the navItems.
//         function clickhandler(event){
//             event.preventDefault();

//             // console.log('hello');
//             // target will revealwhta generated the event  - that was 'clicked'.
//             const clickedItem = event.target.textContent;
//             const clicked = clickedItem.toLowerCase();


//             render(states[clicked]);
//         });
//     i += 1;
// }

// // .addEventListener

// // we want to re-render out page based on what the user clicks in our navigation menu.
// we need to re-render the page with the need view.
