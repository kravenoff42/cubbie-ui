'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./Header/Header');
const ImageGallery = require('./ImageGallery/ImageGallery');

let items = [
  { url: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg'}
];

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="app">
        <Header />
        <ImageGallery items={items} />
      </div>
    )
  }
}

module.exports = App;