'use strict';

const React = require('react');

const cubbieLogo = require('../../assets/images/mini-logo.jpg');

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      section: "Pantry"
    }
  }

  // Logo will be the cubbie logo
  // section will represent what section of the site we are on
  //     ie, Pantry, Recipes, Profile, or Suggestions
  // menu will be a mobile-responsive button that expands into a menu,
  //    linking to the different sections.
  render() {
    return (
      <header>
        <ul>
          <li id="logo"><a href={window.location.origin}><img src={cubbieLogo}></img></a></li>
          <li id="section">{ this.state.section }</li>
          <li id="menu"><a href='#'>Menu</a></li>
        </ul>
      </header>
    )
  }
}

module.exports = Header;