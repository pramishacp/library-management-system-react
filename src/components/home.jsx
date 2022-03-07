import React, { Component } from "react";

import { findUsers } from "../services/userService";
import auth from "../services/authService";

import UserList from "./userList";

class Home extends Component {
  state = {
    users: [],
    currentUser: "",
  };

  async componentDidMount() {
    const { data: users } = await findUsers();
    this.setState({ users });
  }

  handleLogin = async (user) => {
    await auth.login(user);

    const currentUser = await auth.getCurrentUser(user);
    this.setState({ currentUser });
  };

  render() {
    const { length } = this.state.users;
    const { users, currentUser } = this.state;

    return (
      <React.Fragment>
        <h2>Home</h2>
        <p>{length} users</p>
        {length === 0 ? null : (
          <UserList users={users} currentUser={currentUser} onLogin={this.handleLogin} />
        )}
      </React.Fragment>
    );
  }
}

export default Home;
