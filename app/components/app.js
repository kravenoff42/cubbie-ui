'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./Header/Header');
const ImageGallery = require('./ImageGallery/ImageGallery');

let items = [
  { name: 'Sandwich', url: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Banana', url: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Taco', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
  { name: 'Turkey Sandwich', url: 'http://animalwelfareapproved.org/wp-content/uploads/2011/01/Taco-iStock.jpg'},
];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayItem: false
    }
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