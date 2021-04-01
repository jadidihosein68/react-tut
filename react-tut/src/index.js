
/*
import {Teacher} from "./teacher"; 
const tacher = new Teacher("kambiz" ,"fucker");
tacher.teach();
*/


import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from "./registerServiceWorker";

import Counter from "./components/counter"



ReactDOM.render(<Counter/>, document.getElementById('root'));
registerServiceWorker();