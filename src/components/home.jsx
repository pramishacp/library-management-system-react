import React, { Component } from "react";

import { findUsers } from "../services/userService";

import UserList from "./userList";

class Home extends Component {
  state = {
    users: [],
    user: null,
  };

  async componentDidMount() {
    const { data: users } = await findUsers();
    this.setState({ users });
  }

  handleLogin(user) {
    console.log("handleLogin clicked", user);
  }

  render() {
    const { length } = this.state.users;
    const { users } = this.state;

    return (
      <React.Fragment>
        <h2>Home</h2>
        <p>{length} users</p>
        {length === 0 ? null : <UserList users={users} onLogin={this.handleLogin}/>}
      </React.Fragment>
    );
  }
}

export default Home;
