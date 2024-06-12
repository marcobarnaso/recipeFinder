import React, { Component, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { MenuItem, Menu, Modal } from "semantic-ui-react";
import { logout } from "../services/authService";
import { isAuthenticated } from "../services/authService";

export default class MenuStackable extends Component {
  static contextType = AuthContext;
  state = {
    activeItem: "",
    modalOpen: false,
  };
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name,
    });
    if (name === "logout") {
      this.setState({ modalOpen: true });
      //this.props.navigate("/")
    }
  };

  handleModalClose = () => {
    const { logoutContext } = this.context;
    logoutContext()
    this.setState({ modalOpen: false });
    logout();
  };

  render() {
    const { activeItem, modalOpen } = this.state;

    return (
      <Menu stackable>
        <MenuItem>
          <i className="react icon"></i>
          <i className="node js icon"></i>
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
        {isAuthenticated() && (
          <>
            <MenuItem
              as={Link}
              to="/favorites"
              name="favorites"
              active={activeItem === "favorites"}
              onClick={this.handleItemClick}
            >
              Favorites
            </MenuItem>
            <MenuItem
              as={Link}
              to="/"
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              Logout
            </MenuItem>
          </>
        )}
        {!isAuthenticated() && (
          <MenuItem
            as={Link}
            to="authentication"
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Sign-in
          </MenuItem>
        )}
        <MenuItem
          as={Link}
          to="about"
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          About
        </MenuItem>
        <Modal
          open={modalOpen}
          onClose={this.handleModalClose}
          header="Do you want to logout?"
          content="You won't be able to add recipes to favorites."
          actions={["Cancel", { key: "done", content: "OK", positive: true }]}
        />
      </Menu>
    );
  }
}

// export default (props) => {
//   const navigate = useNavigate();
//   return <MenuStackable {...props} navigate={navigate} />;
// };
