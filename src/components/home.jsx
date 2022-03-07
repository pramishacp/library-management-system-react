import React from "react";

import auth from "../services/authService";

const Home = ({ user }) => {
  async function onLogout () {
    await auth.logout();

    window.location = "/login";
  }
  return (
    <React.Fragment>
      <h2>Home</h2>
      <p>Hey {user.name}!</p>
      <div>
        <button onClick={() => onLogout()}>Logout</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
