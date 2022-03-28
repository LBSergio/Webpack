//import Template from '@templates/Template.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import '@styles/main.css';
import '@styles/global.scss';
import '@styles/vars.styl';

//          Parte de WEBPACK
//
// (async function App() {
//   const main = null || document.getElementById('main');
//   main.innerHTML = await Template();
// })();
//
//            Parte de instalación de React

ReactDOM.render(<App/>,document.getElementById('app'));