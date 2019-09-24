import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import './NavBar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="header " expand="md">
          <NavbarBrand className="header__nav-dark" href="/">Markdown Previewer</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
