import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo'; 8.8K (gzipped: 3K)

const router = new Navigo(location.origin);


const states = {
    'home': {
        'title': 'Home'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    },
    'blog': {
        'title': 'Blog Page'
    }
};

// const store = {-
// };


function render(state){
    console.log('state came in as:', state);

    document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;



router

    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenAdder(navItem){
        navItem.addEventListener('click', function(event){
            event.preventDefault();

            render(states[event.target.textContent.toLowerCase()]);
        });
    });
}


render(states.home);



router
    .on('/', function routerFxn(){
        console.log('hello home page!');
    })
    .resolve();

router
    .on(':page', function handleParams(params){
        console.log(params.page);
    })
    .on('/', function resolver(){
        console.log('hello home page!');
    })
    .resolve();

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
