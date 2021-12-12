import React from 'react';
import ReactDOM from 'react-dom'
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css'

const divRoot = document.querySelector('#app');

// ReactDOM.render( <FirstApp portMessage='Listening on port' />, divRoot);
ReactDOM.render( <CounterApp year={2021} />, divRoot);