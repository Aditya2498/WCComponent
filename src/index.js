import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebcomponent from 'react-to-webcomponent';
import Temp from './temp';
import './index.css';
import FormNew from './FormNew';
// import {App} from './App';





const FormElemnet = reactToWebcomponent(FormNew,React,ReactDOM);
const TempElemnent = reactToWebcomponent(Temp,React,ReactDOM);

customElements.define("fc-element",FormElemnet);
customElements.define("temp-1",TempElemnent);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
