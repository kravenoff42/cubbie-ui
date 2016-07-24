'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./Header/Header');
const ImageGallery = require('./ImageGallery/ImageGallery');

let inventory = [
  {name: 'Apple', quantity: 2, expDate: new Date(2016, 8, 4) , image: require('../assets/images/food/apple.jpg') },
  {name: 'Carrot', quantity: 3, expDate: new Date(2016, 10, 3) , image: require('../assets/images/food/carrot.png') },
  {name: 'Catfish', quantity: 2, expDate: new Date(2016, 8, 2) , image: require('../assets/images/food/catfish.jpg')},
  {name: 'Chicken', quantity: 4, expDate: new Date(2016, 8, 7) , image: require('../assets/images/food/chicken.jpg')},
  {name: 'Pizza', quantity: 1, expDate: new Date(2016, 6, 2), image: require('../assets/images/food/pizza.png')},
  {name: 'Ramen', quantity: 6, expDate: new Date(2018, 3, 8) , image: require('../assets/images/food/ramen.jpg')},
];

let recipes = [
  {name: 'Chicken Curry', ingredients: ['Chicken', 'Curry']},
  {name: 'Stew', ingredients: ['Beef', 'Boullion', 'Carrots', 'Potatoes']},
  {name: 'Chicken Pot Pie', ingredients: ['Chicken', 'A Pot', 'Pie']}
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
        <ImageGallery items={inventory} />
      </div>
    )
  }
}

module.exports = App;