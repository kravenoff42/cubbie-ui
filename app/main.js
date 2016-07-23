'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/app');

console.log(App);

require('./styles/style.css')

ReactDOM.render(
    <App />, document.getElementById('container')
)