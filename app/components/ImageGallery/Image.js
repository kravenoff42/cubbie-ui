'use strict';

const React = require('react');

class Image extends React.Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    return (
      
      <li><img src={this.props.item.url}></img></li>
    )
  }

}

module.exports = Image;