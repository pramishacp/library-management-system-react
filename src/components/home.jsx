import React, { Component } from "react";

import { findUsers } from "../services/userService";

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
    console.log('handleLogin clicked', user)
  }

  render() {
    const { length } = this.state.users;
    const { users } = this.state;

    return (
      <React.Fragment>
        <h2>Home</h2>
        <p>
          {length} users
        </p>
        {length === 0 ? null : (
          <ol>
            {users.map((user) => {
              return (
                <li key={user.id}>
                  <div>
                    <button onClick={() => this.handleLogin(user)}>
                      {user.name}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
