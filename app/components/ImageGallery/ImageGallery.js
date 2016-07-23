'use strict';

const React = require('react');

const Image = require('./Image')

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let foodItems = this.props.items.map(item => {
      return <Image item={ item } />
    });

    return (
      <div id="gallery-container">
        <ul>
          { foodItems }
        </ul>
      </div>
    )
  }
}

module.exports = ImageGallery;