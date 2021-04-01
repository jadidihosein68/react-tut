
/*
import {Teacher} from "./teacher"; 
const tacher = new Teacher("kambiz" ,"fucker");
tacher.teach();
*/


import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';



/*
// fopr study purposr only !
import Counter from "./components/counter"
ReactDOM.render(<Counter/>, document.getElementById('root'));
*/

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();