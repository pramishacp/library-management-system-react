import React, { Component } from "react";

import { findUsers } from "../services/userService";
import auth from "../services/authService";

import UserList from "./user/userList";

class Login extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await findUsers();
    this.setState({ users });
  }

  handleLogin = async (user) => {
    await auth.login(user);
    window.location = "/";
  };

  render() {
    const { length } = this.state.users;
    const { users } = this.state;

    return (
      <React.Fragment>
        <h2>Login</h2>
        <p>{length} users</p>
        {length === 0 ? null : (
          <UserList users={users} onLogin={this.handleLogin} />
        )}
      </React.Fragment>
    );
  }
}

export default Login;
