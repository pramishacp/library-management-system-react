import React from "react";

const UserItem = ({ user, currentUser, onLogin }) => {
  return (
    <React.Fragment>
      <li>
        <div>
          <button onClick={() => onLogin(user)}>{user.name}</button>
          {user.id === currentUser.id && <button>Logout</button>}
        </div>
      </li>
    </React.Fragment>
  );
};

export default UserItem;
