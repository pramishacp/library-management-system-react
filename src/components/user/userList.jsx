import React from "react";
import UserItem from "./userItem";

const UserList = ({ users, onLogin }) => {
  return (
    <React.Fragment>
      <ol>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} onLogin={onLogin} />;
        })}
      </ol>
    </React.Fragment>
  );
};

export default UserList;
