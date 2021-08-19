import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./data/data.json";
// import Data from './data/data'
// let DataJson = require('./data/data.json');

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

