'use strict';

const React = require('react');

const plusRender = require('../../assets/images/plus.png');

class Image extends React.Component {
  constructor(props) {
    super(props)
  
  }

  // the anchor tag will change the display of an overarching div from
  // display: none to display: block
  render() {
    return (
      <li>
        <a href='#'><img src={plusRender}></img></a>
        <img src={ this.props.item.url } ></img>
      </li>
    )
  }

}

module.exports = Image;