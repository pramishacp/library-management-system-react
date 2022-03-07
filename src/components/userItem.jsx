import React from "react";

const UserItem = ({ user, onLogin }) => {
  return (
    <React.Fragment>
      <li>
        <div>
          <button onClick={() => onLogin(user)}>{user.name}</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default UserItem;
