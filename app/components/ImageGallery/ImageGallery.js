'use strict';

const React = require('react');

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let photos = this.props.items.map((photo) => {
      return <li><img src={photo.url}></img></li>
    });

    console.log(photos);
    return (
      <div id="gallery-container">
          <ul>
            {photos}
          </ul>
      </div>
    )
  }
}

module.exports = ImageGallery;