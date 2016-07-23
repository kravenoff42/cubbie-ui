'use strict';

const React = require('react');

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
          <li id="logo"><a href='#'>cubbie.</a></li>
          <li id="section"><a href='#'>{ this.state.section }</a></li>
          <li id="menu"><a href='#'>Menu</a></li>
        </ul>
      </header>
    )
  }
}

module.exports = Header;