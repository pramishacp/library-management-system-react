import React from "react";

const UserList = ({ users, onLogin }) => {
  return (
    <React.Fragment>
      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                <button onClick={() => onLogin(user)}>
                  {user.name}
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </React.Fragment>
  );
};

export default UserList;
