'use strict'

const React = require('react');

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: true
    }

  }

  render() {
    return (
      <div className="user-menu">
        <button onClick={ openMenu }>☰</button>
        <div id="menu-content" className="content">
          <a href="#">Pantry</a>
          <a href="#">Recipes</a>
          <a href="#">Profile</a>
          <a href="#">Log Out</a>
        </div>
      </div>
    )
  }
}

function openMenu() {
  document.getElementById('menu').classList.toggle("show");
}

module.exports = Menu;