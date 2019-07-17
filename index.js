import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

document.querySelector('#root').innerHTML = '
${Navigation}
${Header}
${Main}
${Footer}';

console.log(Navigation, Header, Main, Footer);
