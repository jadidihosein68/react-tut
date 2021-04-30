
/*
import {Teacher} from "./teacher"; 
const tacher = new Teacher("kambiz" ,"fucker");
tacher.teach();
*/


import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import Apptut from "./Apptut";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//import Counters from "./components/counters";



/*
// fopr study purposr only !
import Counter from "./components/counter"
import Counters from "./components/counters";
ReactDOM.render(<Counters/>, document.getElementById('root'));
registerServiceWorker();
*/

/*
ReactDOM.render(<Apptut/>, document.getElementById('root'));
registerServiceWorker();
*/



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
