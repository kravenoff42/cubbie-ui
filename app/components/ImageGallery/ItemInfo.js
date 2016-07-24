'use strict'

const React = require('react');

class ItemInfo extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="item-overlay">
        <h3>{ this.props.item.name }</h3>
        <ul className="info">
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    )
  }
}

module.exports = ItemInfo;