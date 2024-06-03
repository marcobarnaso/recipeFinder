import React, { Component } from "react";
import { MenuItem, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <MenuItem>
          <i className="react icon"></i>
        </MenuItem>

        <MenuItem
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </MenuItem>

        <MenuItem
          as={Link}
          to="about"
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          About
        </MenuItem>

        <MenuItem
          as={Link}
          to="authentication"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Sign-in
        </MenuItem>
      </Menu>
    );
  }
}
